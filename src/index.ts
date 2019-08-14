import { CSSLength2String } from './utils/cssLength';
import { RhythmConfig, ProcessingConfig, CSSLenght, CSSLengthUnit } from './types';
import { calculateOptions } from 'utils/calcOptions';
import { rhythm } from './rhythm';
import { establishBaseline } from './baseLine';
import { linesForFontSize } from './linesForFontSize';
import { adjustFontSizeTo } from './adjustFontSize';

export class VerticalRhythm {
    private options: ProcessingConfig;

    constructor (config: RhythmConfig) {
        this.options = calculateOptions(config);
    }

    public rhythm = (value: number) =>
        CSSLength2String( rhythm(this.options)(value) )

    public establishBaseline = () =>
        establishBaseline(this.options)

    public linesForFontSize = (fontSize: CSSLenght<CSSLengthUnit>) =>
        linesForFontSize(fontSize, this.options)

    public adjustFontSizeTo = (toSize: CSSLenght<CSSLengthUnit>, lines?: number | 'auto', fromSize?: CSSLenght<CSSLengthUnit>) =>
        adjustFontSizeTo(this.options)(toSize, lines, fromSize)
}

export * from './types';
export * from './utils/cssLength';
