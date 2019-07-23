import { linesForFontSize } from './linesForFontSize';
import { calculateOptions } from '../utils/calcOptions';
import { cssLength as cssl } from '../utils/cssLength';
import { CSSLenght, CSSLengthUnit } from 'types';

describe('linesForFontSize', () => {
    const config  = calculateOptions({
        baseFontSize: cssl`21px`,
        baseLineHeight: 4 / 3,
        rhythmUnit: 'rem'
    });

    const ls = (size: CSSLenght<CSSLengthUnit>) =>
        linesForFontSize(size, config);

    it('should return a result', () => {
        expect(ls(cssl`16px`)).toBeDefined();
    });

    it('should return line value of larger than 1 if font size is larger than baseLineHeight', () => {
        expect(ls(cssl`29px`) > 1).toBeTruthy();
    });

    it('should return line value of 1 if font size is less than baseLineHeight', () => {
        expect(ls(cssl`20px`)).toEqual(1);
    });

    it('should return add extra lines if space taken up by font too close to edges of line (as determined by minLinePadding', () => {
        expect(ls(cssl`26px`)).toEqual(1.5);
        expect(ls(cssl`24px`)).toEqual(1);

        const options = calculateOptions({
            baseFontSize: cssl`21px`,
            baseLineHeight: 4 / 3,
            rhythmUnit: 'rem',
            minLinePadding: cssl`0px`
        });

        const ls2 = (fs: CSSLenght<CSSLengthUnit>) =>
            linesForFontSize(fs, options);
        expect(ls2(cssl`26px`)).toEqual(1);
    });
});
