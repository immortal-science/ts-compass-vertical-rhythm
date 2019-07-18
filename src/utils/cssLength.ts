import { CSSLengthUnit, CSSLenght } from '../types';

const assembeString = (literals: TemplateStringsArray, ...placeholders: Array<string | number>) => {
    let result = '';

    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i];
    }

    result += literals[literals.length - 1];

    return result;
};

/**
 * Parses CSS length notation1
 * @returns {CSSLenght} { value: 12, unit: 'px' }
 */
export function cssLength(literals: TemplateStringsArray, ...placeholders: Array<string | number>): CSSLenght<CSSLengthUnit> {
    const str = assembeString(literals, ...placeholders);
    const validationRegX = /^(-?[\d\.]+)(px|rem|em|ex)$/g;

    if (!str.match(validationRegX)) {
        throw new Error('Invalid CSS length notation: ' + str);
    }

    const [, valueStr, unit] = validationRegX.exec(str) as any as [string, string, CSSLengthUnit];
    const value = parseFloat(valueStr);

    return { value, unit };
}

export const isCssLength = (obj: CSSLenght<CSSLengthUnit> | number): obj is CSSLenght<CSSLengthUnit> =>
    typeof obj === 'object' && obj.unit && obj.value && typeof obj.value === 'number';

export const renderCSSLength = ({ value, unit }: CSSLenght<CSSLengthUnit>, numberOfDigits: number = 5): string =>
    value.toFixed(numberOfDigits) + unit;
