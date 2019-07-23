import { ProcessingConfig, CSSLenght, CSSLengthUnit } from '../types';
import { convertCSSLength } from '../utils/convertCssLength';

export const rhythm = (options: ProcessingConfig) => {
    const convert = convertCSSLength(options.baseFontSize);

    return (lines: number = 1, fontSize: CSSLenght<CSSLengthUnit> = options.baseFontSize, offset: number = 0) => {
        const length: CSSLenght<'px'> = {
            value: lines * options.baseLineHeightInPx.value - offset,
            unit: 'px'
        };
        let rhythmLength = convert(length, options.rhythmUnit, fontSize);

        if (rhythmLength.unit === 'px') {
            rhythmLength =  {
                value: Math.floor(rhythmLength.value),
                unit: rhythmLength.unit
            };
        }

        return rhythmLength;
    };
};
