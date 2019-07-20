import { ProcessingConfig, EstablishedBaseLine, CSSLengthUnit } from './types';

type EstablishBAseLineConfig = Pick<ProcessingConfig, 'baseFontSize' | 'baseLineHeight'>;

export const establishBaseline = ({ baseFontSize, baseLineHeight }: EstablishBAseLineConfig): EstablishedBaseLine =>
    // Set these values on html in your css.
    ({
        // 16px is the default browser font size.
        // Set base fontsize in percent as older browsers (or just IE6) behave
        // weird otherwise.
        fontSize: {
            value: baseFontSize.value / 16 * 100,
            unit: '%' as CSSLengthUnit
        },
        lineHeight: baseLineHeight,
    });
