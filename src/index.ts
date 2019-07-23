import { CSSLength2String } from './utils/cssLength';
import { RhythmConfig, ProcessingConfig, CSSLenght, CSSLengthUnit } from './types';
import { calculateOptions } from 'utils/calcOptions';
import { rhythm } from './rhythm';
import { establishBaseline } from './baseLine';
import { linesForFontSize } from './linesForFontSize';

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
}

export * from './types';
export * from './utils/cssLength';
