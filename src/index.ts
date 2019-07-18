import { convertCSSLength } from './utils/convertCssLength';
import { cssLength as cssl, isCssLength, CSSLength2String } from './utils/cssLength';
import { RhythmConfig, CSSLenght, CSSLengthUnit, ProcessingConfig } from './types';

const rhythm = (options: ProcessingConfig) => {
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

export class VerticalRhythm {
    private options: ProcessingConfig = {
        baseFontSize: cssl`16px`,
        baseLineHeight: 1.5,
        rhythmUnit: 'rem',
        defaultRhythmBorderWidth: cssl`1px` as CSSLenght<'px'>,
        defaultRhythmBorderStyle: 'solid',
        roundToNearestHalfLine: true,
        minLinePadding: cssl`2px`,
        baseLineHeightInPx: cssl`24px`
    };

    constructor (config: RhythmConfig) {
        const convert = convertCSSLength(config.baseFontSize);

        this.options = {
            ...this.options,
            ...config
        };

        if (isCssLength(config.baseLineHeight)) {
            this.options.baseLineHeightInPx = convert(config.baseLineHeight, 'px');
        } else {
            this.options.baseLineHeightInPx = {
                value: config.baseFontSize.value * config.baseLineHeight,
                unit: 'px'
            };
        }
    }

    public rhythm = (value: number) =>
        CSSLength2String( rhythm(this.options)(value) )
}

export * from './types';
export * from './utils/cssLength';
