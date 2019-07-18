import { cssLength as cssl } from './cssLength';
import { CSSLenght, CSSLengthUnit } from '../types';

/**
 * Allows to convert between absolute and relative css lengths
 * @param baseFontSize { value: number, unit: CSSLengthUnit }
 * @returns converter function
 */
export const convertCSSLength = (baseFontSize: CSSLenght<CSSLengthUnit> = cssl`16px`) =>
    (
        length: CSSLenght<CSSLengthUnit>,
        toUnit: CSSLengthUnit,
        fromContext: CSSLenght<CSSLengthUnit> = baseFontSize,
        toContext: CSSLenght<CSSLengthUnit> = baseFontSize
    ): CSSLenght<CSSLengthUnit> => {

        const fromUnit = length.unit;

        // Optimize for cases where `from` and `to` units are accidentally the same.
        if (fromUnit === toUnit) {
            return length;
        }
        // Convert input length to pixels.
        let pxLength = length.value;

        // Warn if to or from context aren't in pixels.
        // if (unit(fromContext) !== "px") {
        // console.warn(`Parameter fromContext must resolve to a value \
        // in pixel units.`)
        // }
        // if (unit(toContext) !== "px") {
        // console.warn(`Parameter toContext must resolve to a value \
        // in pixel units.`)
        // }

        if (fromUnit !== 'px') {
            if (fromUnit === 'em') {
                pxLength = length.value * fromContext.value;
            } else if (fromUnit === 'rem') {
                pxLength = length.value * baseFontSize.value;
            } else if (fromUnit === 'ex') {
                pxLength = length.value * fromContext.value * 2;
            } else {
                return length;
            }
            // } else if (["ch", "vw", "vh", "vmin"].includes(fromUnit)) {
            // console.warn(`${fromUnit} units can't be reliably converted; Returning \
            // original value.`)
            // return length
            // } else {
            // console.warn(`${fromUnit} is an unknown or unsupported length unit; \
            // Returning original value.`)
            // return length
            // }
        }

        // Convert length in pixels to the output unit
        let outputLength = pxLength;
        if (toUnit !== 'px') {
            if (toUnit === 'em') {
                outputLength = pxLength / toContext.value;
            } else if (toUnit === 'rem') {
                outputLength = pxLength / baseFontSize.value;
            } else if (toUnit === 'ex') {
                outputLength = pxLength / toContext.value / 2;
                // } else if (["ch", "vw", "vh", "vmin"].includes(toUnit)) {
                // console.warn(`${toUnit} units can't be reliably converted; Returning \
                // original value.`)
                // return length
                // } else {
                // console.warn(`${toUnit} is an unknown or unsupported length unit; \
                // Returning original value.`)
            } else {
                return length;
            }
        }

        // return parseFloat(outputLength.toFixed(5)) + toUnit
        return {
            value: parseFloat(outputLength.toFixed(5)),
            unit: toUnit
        };
    };
