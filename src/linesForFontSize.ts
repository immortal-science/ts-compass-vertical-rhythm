import { CSSLenght, CSSLengthUnit, ProcessingConfig } from './types';
import { convertCSSLength } from './utils/convertCssLength';

export const linesForFontSize = (fontSize: CSSLenght<CSSLengthUnit>, options: ProcessingConfig): number => {
    let lines: number;
    const convert = convertCSSLength(options.baseFontSize);
    const fontSizeInPx = convert(fontSize, 'px').value;
    const lineHeightInPx = options.baseLineHeightInPx.value;
    const minLinePadding = convert(options.minLinePadding, 'px').value;

    if (options.roundToNearestHalfLine) {
      lines = Math.ceil(2 * fontSizeInPx / lineHeightInPx) / 2;
    } else {
      lines = Math.ceil(fontSizeInPx / lineHeightInPx);
    }

    // If lines are cramped, include some extra lead.
    if (lines * lineHeightInPx - fontSizeInPx < minLinePadding * 2) {
      if (options.roundToNearestHalfLine) {
        lines += 0.5;
      } else {
        lines += 1;
      }
    }

    return lines;
  };
