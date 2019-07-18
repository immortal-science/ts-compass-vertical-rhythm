/**
 * Basically Math.frac()
 * Alternative to less accurate hacks:
 * ```ts
 * const fracNum = (num: number) => num % 1;
 * console.log( fracNum(34.5697) ) //  0.5696999999999974 in Node
 * ```
 * @example const foo = frac(34.5697) // 0.5697
 */
export const frac = (num: number) =>
    +(num.toString()).replace(
        Math.trunc(num).toString(),
        '0'
    ) * Math.sign(num);
