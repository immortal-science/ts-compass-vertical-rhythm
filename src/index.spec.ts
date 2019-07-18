import { VerticalRhythm } from '.';
import { cssLength as cssl } from './utils/cssLength';

describe('Rhythm', () => {
    it('should calculate rhythm for rem', () => {
        const vrREM = new VerticalRhythm({
            baseFontSize: cssl`21px`,
            baseLineHeight: 4 / 3,
            rhythmUnit: 'rem'
        });
        const rhythm = vrREM.rhythm;

        rhythm(1);

        expect(rhythm(1)).toEqual('1.33333rem');
        expect(rhythm(0.5)).toEqual('0.66667rem');
        expect(rhythm(0.25)).toEqual('0.33333rem');
    });

    it('should calculate rhythm for em', () => {
        const vrEM = new VerticalRhythm({
            baseFontSize: cssl`24px`,
            baseLineHeight: 1.25,
            rhythmUnit: 'em'
        });
        const rhythm = vrEM.rhythm;

        expect(rhythm(1)).toEqual('1.25000em');
        expect(rhythm(0.5)).toEqual('0.62500em');
        expect(rhythm(0.25)).toEqual('0.31250em');
    });

    it('should calculate rhythm for px', () => {
        const vrEM = new VerticalRhythm({
            baseFontSize: cssl`24px`,
            baseLineHeight: 1.25,
            rhythmUnit: 'px'
        });
        const rhythm = vrEM.rhythm;

        expect(rhythm(1)).toEqual('30.00000px');
        expect(rhythm(0.5)).toEqual('15.00000px');
        expect(rhythm(0.25)).toEqual('7.00000px');
    });

    it('should calculate rhythm if lineHeight is set in px', () => {
        const vrEM = new VerticalRhythm({
            baseFontSize: cssl`24px`,
            baseLineHeight: cssl`30px`,
            rhythmUnit: 'px'
        });
        const rhythm = vrEM.rhythm;

        expect(rhythm(1)).toEqual('30.00000px');
        expect(rhythm(0.5)).toEqual('15.00000px');
        expect(rhythm(0.25)).toEqual('7.00000px');
  });
});
