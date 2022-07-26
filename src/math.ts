// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Import

import { isType, typeName } from './typing.ts'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

/**
 * Converts an integer to an array of its digits.
 * @example
 * intDigits(123450)  // => [1, 2, 3, 4, 5, 0]
 * intDigits(1/0)     // => []
 */
export const intDigits = (int:number, base=10) =>
   Number.isSafeInteger(int) || typeof int === 'bigint'
      ? int.toString(base).split('').map(digit => parseInt(digit, base))
      : []

/**
 * Takes target float number and a maximum denominator for precision and finds
 * the simplest and closest fraction up to that target real in the form of an
 * array: `[numerator, divisor]`.
 * @example
 * realToFraction(0.23, 10)      // => [2, 9]
 * realToFraction(0.31415, 100)  // => [11, 35]
 * realToFraction(NaN, NaN)      // => [NaN, NaN]
 */
export function fraction(float:number, denMax:number) {
   if (!isType.num(float) || !isType.nat(denMax)) throw TypeError(
      `realFraction() requires a target real number and a natural number max denominator, but got:`
         + `\n  arg[0]: ${typeName(float)}`
         + `\n  arg[1]: ${typeName(denMax)}`
   )
   let num_a = 0
   let den_a = 1
   let num_b = 1
   let den_b = 1
   const getMedian = () => (num_a + num_b) / (den_a + den_b)
   const isUnderLimit = () => den_a <= denMax && den_b <= denMax
   const sumNum = () => num_a + num_b
   const sumDen = () => den_a + den_b

   while (isUnderLimit()) {
      if (float === getMedian()) {
         if (sumDen() <= denMax) return [sumNum(), sumDen()]
         if (den_a < den_b) return [num_b, den_b]
         else return [num_a, den_a]
      }
      if (getMedian() < float) [num_a, den_a] = [sumNum(), sumDen()]
      else [num_b, den_b] = [sumNum(), sumDen()]
   }
   return den_a > denMax ? [num_b, den_b] : [num_a, den_a]
}

/** Consumes two safe integers and returns their greatest common divisor. */
const gcd2 = (a:number, b:number) => {
   while (b !== 0) [a, b] = [b, a % b]
   return a
}

export const gcd = (...ints:number[]) => {
   if (!ints.every(Number.isSafeInteger)) throw Error(`Only safe integers allowed.`)
   return ints.reduce(gcd2)
}

/** Consumes two `BigInt` and returns their greatest common divisor. */
const gcd2_big = (a:bigint, b:bigint) => {
   while (b !== 0n) [a, b] = [b, a % b]
   return a
}

/**
 * Greatest common divisor (GCD) for `BigInt`.
 */
export const gcd_big = (bigints: bigint[]) => bigints.reduce(gcd2_big)

function GCD(...ints:number[]): number
function GCD(...ints:bigint[]): bigint
function GCD(...ints:unknown[]): unknown {
   if (ints.every(int => typeof int === 'bigint')) return (ints as bigint[]).reduce(gcd2_big)
   if (ints.every(Number.isSafeInteger)) return (ints as number[]).reduce(gcd2)
   throw Error(`Only safe integers allowed.`)
}

function gcd_binary(a:bigint, b:bigint) {
   if (b === 0n) return a
   let commonMultipleOfTwo = 1n
   while ((a & 1n) === 0n && (b & 1n) === 0n) {
      a >>= 1n
      b >>= 1n
      commonMultipleOfTwo <<= 1n
   }
   while ((a & 1n) === 0n) a >>= 1n
   while ((b & 1n) === 0n) b >>= 1n
   while (a !== b) {
      if (a > b) a -= b
      else b -= a
      while ((a & 1n) === 0n) a >>= 1n
      while ((b & 1n) === 0n) b >>= 1n
   }
   return a * commonMultipleOfTwo
}

function gcd_bin(a:bigint, b:bigint) {
   if (a < b) [a, b] = [b, a]
   if (b === 0n) return a
   let commonMultipleOfTwo = 1n
   while ((a & 1n) === 0n && (b & 1n) === 0n) {
      a >>= 1n
      b >>= 1n
      commonMultipleOfTwo <<= 1n
   }
   while ((a & 1n) === 0n) a >>= 1n
   while ((b & 1n) === 0n) b >>= 1n
   while (b !== 0n) {
      [a, b] = [b, a - b]
      while ((b & 1n) === 0n && b > 0) b >>= 1n
      if (a < b) [a, b] = [b, a]
   }
   return a * commonMultipleOfTwo
}

/**
 * Simplifies a fraction with an **integer** numerator `num` and divisor
 * `div`. Returns a fraction as an array: [numerator, divisor].
 * @example
 * simplifyFraction(6/3)  // => [2, 1]
 * simplifyFraction(3/6)  // => [1, 2]
 * simplifyFraction(1/2)  // => [1, 2]
 * simplifyFraction(1/0)  // => throws Error object
 */
export function simplifyFraction(num:number, div:number) {
   if (!Number.isSafeInteger(num) || !Number.isSafeInteger(div)) throw Error(
      `Arguments num:${num} and div:${div} must be safe integers.`
   )

   if (div === 0) throw Error(
      `The divisor (aka denominator) of a fraction cannot be 0.`
   )

   const factor = gcd2(num, div)
   return [num/factor, div/factor]
}

export function randomInts(n:number, bits:8|16|32): Uint8Array | Uint16Array | Uint32Array
export function randomInts(n, bits=32) {
   switch(bits) {
      case 8: return window.crypto.getRandomValues(new Uint8Array(n))
      case 16: return window.crypto.getRandomValues(new Uint16Array(n))
      case 32: return window.crypto.getRandomValues(new Uint32Array(n))
      default: throw Error(`Unsupported number of bits: ${bits}`)
   }
}