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
export type CSSLengthUnit = 'rem' | 'em' | 'px' | 'ex' | '%';
export type CSSLenght<T extends CSSLengthUnit> = {
    value: number,
    unit: T
};
export type RhythmConfig = {
    baseFontSize: CSSLenght<CSSLengthUnit>,
    baseLineHeight: number | CSSLenght<CSSLengthUnit>,
    rhythmUnit: CSSLengthUnit,
    minLinePadding?: CSSLenght<CSSLengthUnit>
};

export type ProcessingConfig = RhythmConfig & {
    baseLineHeightInPx: CSSLenght<CSSLengthUnit>,
    defaultRhythmBorderWidth?: CSSLenght<'px'>,
    defaultRhythmBorderStyle?: BorderStyle,
    roundToNearestHalfLine?: true
};

export interface EstablishedBaseLine {
    fontSize: CSSLenght<CSSLengthUnit>;
    lineHeight: number | CSSLenght<CSSLengthUnit>;
}
