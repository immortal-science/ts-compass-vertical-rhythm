import { cssLength } from './cssLength';

describe('cssLength template tag', () => {
    it('should parse css lenghs', () => {
        expect(cssLength`${12}px`).toEqual({ value: 12, unit: 'px' });
        expect(cssLength`-42em`).toEqual({ value: -42, unit: 'em' });
        expect(cssLength`-1.6666em`).toEqual({ value: -1.6666, unit: 'em' });
    });

    it('should perform runtime validation', () => {
        expect(() => cssLength`12remeters`).toThrow('Invalid CSS length notation: 12remeters');
    });
});
