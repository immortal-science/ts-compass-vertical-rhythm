import { ProcessingConfig, CSSLenght } from './types';
import { cssLength as cssl } from './utils/cssLength';

export const DEFAULT_OPTIONS: ProcessingConfig = {
    baseFontSize: cssl`16px`,
    baseLineHeight: 1.5,
    rhythmUnit: 'rem',
    defaultRhythmBorderWidth: cssl`1px` as CSSLenght<'px'>,
    defaultRhythmBorderStyle: 'solid',
    roundToNearestHalfLine: true,
    minLinePadding: cssl`2px`,
    baseLineHeightInPx: cssl`24px`
};
