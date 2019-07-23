import { establishBaseline } from './establishBaseLine';
import { cssLength as cssl, isCssLength } from '../utils/cssLength';

describe('establishBaseline', () => {
    const estB = () => establishBaseline({ baseFontSize: cssl`24px`, baseLineHeight: 1.25 });

    it('should return an object', () => {
        expect(estB()).toBeInstanceOf(Object);
    });

    it('should return an object with a fontSize and lineHeight defined', () => {
        const result = estB();
        expect(result.fontSize).toBeDefined();
        expect(result.lineHeight).toBeDefined();
    });

    it('should return fontSize with percent as its unit', () => {
        const result = estB();
        expect(result.fontSize.unit).toEqual('%');
    });

    it('should return unitless lineHeight', () => {
        const result = estB();
        expect(result.lineHeight).toEqual(1.25);
    });

    it('should return lineHeight with units if specified', () => {
        const result = establishBaseline({
            baseFontSize: cssl`16px`,
            baseLineHeight: cssl`1.25em`
        });

        if (!isCssLength(result.lineHeight)) {
            throw new Error('Expected CSSLength, got number');
        }
        expect(result.lineHeight.unit).toEqual('em');
    });

    it('should return sensible results', () => {
        const result = estB();
        expect(result.fontSize).toEqual(cssl`150%`);
        expect(result.lineHeight).toEqual(1.25);
    });
});
