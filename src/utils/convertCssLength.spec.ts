import { convertCSSLength } from './convertCssLength';
import { cssLength as cssl } from './cssLength';

describe('convert-css-length', () => {
    const convertLength = convertCSSLength();

    it('should exist', () => expect(convertCSSLength).toBeDefined());

    it('should handle cases where from and to units are the same', () => {
        expect(convertLength(cssl`1em`, 'em')).toEqual(cssl`1em`);
        expect(convertLength(cssl`1rem`, 'rem')).toEqual(cssl`1rem`);
        expect(convertLength(cssl`1px`, 'px')).toEqual(cssl`1px`);
    });

    it('should convert em to px', () => {
        expect(convertLength(cssl`1em`, 'px')).toEqual(cssl`16px`);
        expect(convertLength(cssl`.5em`, 'px')).toEqual(cssl`8px`);
        return expect(convertLength(cssl`1.5em`, 'px')).toEqual(cssl`24px`);
    });

    it('should convert em to rem', () => {
        expect(convertLength(cssl`1em`, 'rem')).toEqual(cssl`1rem`);
        expect(convertLength(cssl`.5em`, 'rem')).toEqual(cssl`0.5rem`);
        return expect(convertLength(cssl`1.5em`, 'rem')).toEqual(cssl`1.5rem`);
    });

    it('should convert ex to px', () => {
        expect(convertLength(cssl`1ex`, 'px')).toEqual(cssl`32px`);
        expect(convertLength(cssl`.5ex`, 'px')).toEqual(cssl`16px`);
        return expect(convertLength(cssl`1.5ex`, 'px')).toEqual(cssl`48px`);
    });

    it('should convert rem to px', () => {
        expect(convertLength(cssl`1rem`, 'px')).toEqual(cssl`16px`);
        expect(convertLength(cssl`.5rem`, 'px')).toEqual(cssl`8px`);
        return expect(convertLength(cssl`1.5rem`, 'px')).toEqual(cssl`24px`);
    });

    it('should convert px to em', () => {
        expect(convertLength(cssl`16px`, 'em')).toEqual(cssl`1em`);
        expect(convertLength(cssl`8px`, 'em')).toEqual(cssl`0.5em`);
        return expect(convertLength(cssl`24px`, 'em')).toEqual(cssl`1.5em`);
    });

    it('should convert px to ex', () => {
        expect(convertLength(cssl`16px`, 'ex')).toEqual(cssl`0.5ex`);
        expect(convertLength(cssl`8px`, 'ex')).toEqual(cssl`0.25ex`);
        return expect(convertLength(cssl`24px`, 'ex')).toEqual(cssl`0.75ex`);
    });

    it('should convert px to rem', () => {
        expect(convertLength(cssl`16px`, 'rem')).toEqual(cssl`1rem`);
        expect(convertLength(cssl`8px`, 'rem')).toEqual(cssl`0.5rem`);
        return expect(convertLength(cssl`24px`, 'rem')).toEqual(cssl`1.5rem`);
    });

    // With context.
    it('should convert em to px with fromContext', () => {
        expect(convertLength(cssl`1em`, 'px', cssl`14px`)).toEqual(cssl`14px`);
        expect(convertLength(cssl`.5em`, 'px', cssl`14px`)).toEqual(cssl`7px`);
        return expect(convertLength(cssl`1.5em`, 'px', cssl`14px`)).toEqual(cssl`21px`);
    });

    it('should convert em to rem with fromContext', () => {
        expect(convertLength(cssl`1em`, 'rem', cssl`14px`)).toEqual(cssl`0.875rem`);
        expect(convertLength(cssl`.5em`, 'rem', cssl`14px`)).toEqual(cssl`0.4375rem`);
        return expect(convertLength(cssl`1.5em`, 'rem', cssl`14px`)).toEqual(cssl`1.3125rem`);
    });

    return it('should convert px to em with toContext', () => {
        expect(convertLength(cssl`16px`, 'em', null, cssl`14px`)).toEqual(cssl`1.14286em`);
        expect(convertLength(cssl`8px`, 'em', null, cssl`14px`)).toEqual(cssl`0.57143em`);
        return expect(convertLength(cssl`24px`, 'em', null, cssl`14px`)).toEqual(cssl`1.71429em`);
    });
});
