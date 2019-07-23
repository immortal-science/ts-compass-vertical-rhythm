import { ProcessingConfig, CSSLenght, CSSLengthUnit } from '../types';
import { convertCSSLength } from '../utils/convertCssLength';
import { rhythm } from '../rhythm';
import { linesForFontSize } from '../linesForFontSize';

const accountForPercentSize = (
    size: CSSLenght<CSSLengthUnit>,
    baseFontSize: CSSLenght<CSSLengthUnit>
): CSSLenght<CSSLengthUnit> => {
    if (size.unit === '%') {
        return {
            value: baseFontSize.value * (size.value / 100),
            unit: 'px'
        };
    }
    return size;
};

export const adjustFontSizeTo = (options: ProcessingConfig) =>
    (
        toSize: CSSLenght<CSSLengthUnit>,
        lines: number | 'auto' = 'auto',
        fromSize: CSSLenght<CSSLengthUnit> = options.baseFontSize
    ) => {
        const targetSize = accountForPercentSize(toSize, options.baseFontSize);
        const convert = convertCSSLength(options.baseFontSize);
        const r = rhythm(options);

        console.log(targetSize)

        const fromSizePx = convert(fromSize, 'px');
        const resultSize = convert(targetSize, 'px', fromSizePx);

        if (lines === 'auto') {
            lines = linesForFontSize(resultSize, options);
        }

        return {
            fontSize: convert(resultSize, options.rhythmUnit, fromSizePx),
            lineHeight: r(lines, fromSizePx),
        };
    };
