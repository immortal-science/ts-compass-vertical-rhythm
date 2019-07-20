import { RhythmConfig, ProcessingConfig } from '../types';
import { convertCSSLength } from './convertCssLength';
import { isCssLength } from './cssLength';
import { DEFAULT_OPTIONS } from '../constants';

export const calculateOptions = (config: RhythmConfig): ProcessingConfig => {
    const convert = convertCSSLength(config.baseFontSize);

    const options = {
        ...DEFAULT_OPTIONS,
        ...config
    };

    if (isCssLength(config.baseLineHeight)) {
        options.baseLineHeightInPx = convert(config.baseLineHeight, 'px');
    } else {
        options.baseLineHeightInPx = {
            value: config.baseFontSize.value * config.baseLineHeight,
            unit: 'px'
        };
    }

    return options;
};
