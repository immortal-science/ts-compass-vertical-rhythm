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
export type CSSLengthUnit = 'rem' | 'em' | 'px' | 'ex' | '%S';
export type CSSLenght<T extends CSSLengthUnit> = {
    value: number,
    unit: T
};
export type RhythmConfig = {
    baseFontSize: CSSLenght<CSSLengthUnit>,
    baseLineHeight: number | CSSLenght<CSSLengthUnit>,
    rhythmUnit: CSSLengthUnit,
};

export type ProcessingConfig = RhythmConfig & {
    baseLineHeightInPx: CSSLenght<CSSLengthUnit>,
    defaultRhythmBorderWidth?: CSSLenght<'px'>,
    defaultRhythmBorderStyle?: BorderStyle,
    roundToNearestHalfLine?: true,
    minLinePadding?: CSSLenght<CSSLengthUnit>,
};

export interface EstablishedBaseLine {
    fontSize: CSSLenght<CSSLengthUnit>;
    lineHeight: number | CSSLenght<CSSLengthUnit>;
}
