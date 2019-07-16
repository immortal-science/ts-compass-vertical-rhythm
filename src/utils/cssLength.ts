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
export function cssLength(literals: TemplateStringsArray, ...placeholders: Array<string | number>): CSSLenght {
    const str = assembeString(literals, ...placeholders);
    const validationRegX = /^(-?[\d\.]+)(px|rem|em)$/g;

    if (str.match(validationRegX).length === 0) {
        throw new Error('Invalid CSS length notation: ' + str);
    }

    const [, valueStr, unit] = validationRegX.exec(str) as any as [string, string, CSSLengthUnit];
    const value = parseFloat(valueStr);

    return { value, unit };
}
