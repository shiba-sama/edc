// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Array Utility

/**
 * Returns a randomly permuted copy of `arr` using decorate-sort-undecorate.
 * @example
 * shuffle([1, 2, 3, 4, 5]) // returns a shuffled copy
 */
export function shuffle<T>(arr:T[]) {
   return arr
      .map(value => ({ value, weight: Math.random() }))
      .sort((a, b) => a.weight - b.weight)
      .map(o => o.value)
}

/**
 * Returns a randomly permuted copy of `arr` using the Durstenfeld improvement 
 * on the Fischer-Yates shuffle.
 * @example
 * shuffleArray([1, 2, 3, 4, 5]) // returns a shuffled copy
 */
export function shuffleArray<T>(arr:T[]) {
   const 品 = arr.slice();
   for (let i = 品.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [品[i], 品[j]] = [品[j], 品[i]];
   }
   return 品
}

/**
 * Iteratively generate the powerset of `arr`.
 * @example
 * [...powerset([1, 2])] // => [[], [1], [2], [1, 2]]
 */
export function * subsets<T>(arr:T[]) {
   const max = 1 << arr.length
   for (let i = 0; i < max; i++)
      yield arr.filter((_, j) => 1 << j & i)
}

export const powerset = <T>(arr: T[]) => Array.from(
   { length: 1 << arr.length },
   (_, i) => arr.filter((_, j) => 1 << j & i)
)

/** Return the `i`-th subset of `arr`. */
export const pluckSubset = <T>(arr:T[], i:number) => arr.filter((_, j) => 1 << j & i)

/**
 * Iteratively mutates an array to yield permutations.
 */
export function * permute<T>(arr:T[], n = arr.length): IterableIterator<T[]> {
   if (n <= 1) yield arr
   else for (let i = 0; i < n; i++) {
      yield * permute(arr, n - 1)
      const j = n % 2 ? 0 : i;
      [arr[n-1], arr[j]] = [arr[j], arr[n-1]]
   }
}