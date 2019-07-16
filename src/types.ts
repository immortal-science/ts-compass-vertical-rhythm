export type BorderStyle =
    'dotted' |
    'dashed' |
    'solid' |
    'double' |
    'groove' |
    'ridge' |
    'inset' |
    'outset' |
    'none' |
    'hidden';
export type CSSLengthUnit = 'rem' | 'em' | 'px';
export type CSSLenght<T = CSSLengthUnit> = {
    value: number,
    unit: T
};
export type RhythmConfig = {
    baseFontSize: CSSLenght,
    baseLineHeight: number | CSSLenght,
    rhythmUnit: CSSLengthUnit,
    defaultRhythmBorderWidth: CSSLenght<'px'>,
    defaultRhythmBorderStyle: BorderStyle,
    roundToNearestHalfLine: true,
    minLinePadding: CSSLenght,
};
