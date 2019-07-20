import { rhythm as r } from './rhythm';
import { cssLength as cssl } from './utils/cssLength';
import { calculateOptions } from './utils/calcOptions';

describe('Rhythm', () => {
    it('should calculate rhythm for rem', () => {
        const rhythm = r(calculateOptions({
            baseFontSize: cssl`21px`,
            baseLineHeight: 4 / 3,
            rhythmUnit: 'rem'
        }));

        expect(rhythm(1)).toEqual(cssl`1.33333rem`);
        expect(rhythm(0.5)).toEqual(cssl`0.66667rem`);
        expect(rhythm(0.25)).toEqual(cssl`0.33333rem`);
    });

    it('should calculate rhythm for em', () => {
        const rhythm = r(calculateOptions({
            baseFontSize: cssl`24px`,
            baseLineHeight: 1.25,
            rhythmUnit: 'em'
        }));

        expect(rhythm(1)).toEqual(cssl`1.25em`);
        expect(rhythm(0.5)).toEqual(cssl`0.625em`);
        expect(rhythm(0.25)).toEqual(cssl`0.3125em`);
    });

    it('should calculate rhythm for px', () => {
        const rhythm = r(calculateOptions({
            baseFontSize: cssl`24px`,
            baseLineHeight: 1.25,
            rhythmUnit: 'px'
        }));

        expect(rhythm(1)).toEqual(cssl`30px`);
        expect(rhythm(0.5)).toEqual(cssl`15px`);
        expect(rhythm(0.25)).toEqual(cssl`7px`);
    });

    it('should calculate rhythm if lineHeight is set in px', () => {
        const rhythm = r(calculateOptions({
            baseFontSize: cssl`24px`,
            baseLineHeight: cssl`30px`,
            rhythmUnit: 'px'
        }));

        expect(rhythm(1)).toEqual(cssl`30px`);
        expect(rhythm(0.5)).toEqual(cssl`15px`);
        expect(rhythm(0.25)).toEqual(cssl`7px`);
  });
});
