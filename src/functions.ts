// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Functions

type indicator = (x: unknown) => boolean;

/**
 * `not` wraps an indicator function `λ` and returns the opposite of `λ`.
 * 
 * @example
 * const isEven = (x: number) => x % 2 === 0
 * const isOdd = not(isEven)
 * 
 * [1, 2, 3, 4].some(not(isEven))  // => true
 */
export function not(λ: indicator): indicator {
   return (...args) => !λ(...args);
}

export default {
   not,
}