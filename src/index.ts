import { CSSLength2String } from './utils/cssLength';
import { RhythmConfig, ProcessingConfig } from './types';
import { calculateOptions } from 'utils/calcOptions';
import { rhythm } from './rhythm';

export class VerticalRhythm {
    private options: ProcessingConfig;

    constructor (config: RhythmConfig) {
        this.options = calculateOptions(config);
    }

    public rhythm = (value: number) =>
        CSSLength2String( rhythm(this.options)(value) )
}

export * from './types';
export * from './utils/cssLength';
