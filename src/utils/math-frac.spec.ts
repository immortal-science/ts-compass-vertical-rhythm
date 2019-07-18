import { frac } from './math-frac';
import { performance } from 'perf_hooks';

describe('Math frac tests', () => {
    it('should be defined', () => {
        expect(frac).toBeDefined();
    });

    it('should accurately calculate fraction of a number', () => {
        const t1 = performance.now();

        expect( frac(-3.1234) ).toEqual( -0.1234 );
        expect( frac(1.234) ).toEqual( 0.234 );
        expect( frac(56789e-3) ).toEqual( 0.789 );
        expect( frac(12345678) ).toEqual( 0 );
        expect( frac(-34.5697) ).toEqual( -0.5697 );

        const t2 = performance.now();
        console.log(t2 - t1);
    });
});
