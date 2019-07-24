import { adjustFontSizeTo } from './adjustFontSize';
import { calculateOptions } from '../utils/calcOptions';
import { cssLength as cssl } from '../utils/cssLength';
import { rhythm } from '../rhythm';

describe('adjustFontSizeTo', () => {
    const options = calculateOptions({
        baseFontSize: cssl`21px`,
        baseLineHeight: 4 / 3,
        rhythmUnit: 'rem'
    });

    const adj = adjustFontSizeTo(options);
    const rtm = rhythm(options);

    it('should return an object', () => {
        expect(adj(cssl`16px`)).toBeInstanceOf(Object);
    });

    it('should return an object with a fontSize and lineHeight defined', () => {
        const result = adj(cssl`16px`);

        expect(result.fontSize).toBeDefined();
        expect(result.lineHeight).toBeDefined();
    });

    it('should accept px', () => {
        const result = adj(cssl`63px`);
        expect(result.fontSize).toEqual(cssl`3rem`);
        expect(result.lineHeight).toBeDefined();
    });

    it('should accept rem', () => {
        const result = adj(cssl`3rem`);
        expect(result.fontSize).toEqual(cssl`3rem`);

        expect(result.lineHeight).toBeDefined();
    });

    it('should accept em', () => {
        const result = adj(cssl`3em`);
        expect(result.fontSize).toEqual(cssl`3rem`);
        expect(result.lineHeight).toBeDefined();
    });

    it('should accept %', () => {
        const result = adj(cssl`200%`);
        expect(result.fontSize).toEqual(cssl`2rem`);
        expect(result.lineHeight).toBeDefined();
    });

    it('should let you set explicit number of lines', () => {
        let  result = adj(cssl`3em`, 3);
        expect(result.fontSize).toEqual(cssl`3rem`);
        expect(result.lineHeight).toEqual(rtm(3));

        // Weird that Compass let's you set lineHeight to be smaller than
        // fontSize. Guess there's potential use cases for this.
        result = adj(cssl`3em`, 2);
        expect(result.fontSize).toEqual(cssl`3rem`);
        expect(result.lineHeight).toEqual(rtm(2));
    });

    it('should return values in whatever the set rhythmUnit is', () => {
        const opts = calculateOptions({
            baseFontSize: cssl`21px`,
            baseLineHeight: 4 / 3,
            rhythmUnit: 'em'
        });

        const adjst = adjustFontSizeTo(opts);
        const result = adjst(cssl`3em`, 3);

        expect(result.fontSize).toEqual(cssl`3em`);
        expect(result.lineHeight).toBeDefined();
    });

    it('should work with em and fromSize', () => {
        const result = adj(cssl`42px`, 3, cssl`10.5px`);

        expect(result.fontSize).toEqual(cssl`2rem`);
        expect(result.lineHeight).toEqual(cssl`4rem`);
    });
});
