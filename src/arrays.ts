// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Array Utility

/**
 * Returns a shuffled or permuted copy of `arr`.
 * @example
 * shuffle([1, 2, 3, 4, 5]) // returns a shuffled copy
 */
export function shuffle(arr:unknown[]) {
   return arr.slice()
      .map(value => ({ value, weight: Math.random() }))
      .sort((a, b) => a.weight - b.weight)
      .map(o => o.value)
}

/**
 * Iteratively generate the powerset of `arr`.
 * @example
 * [...powerset([1, 2])] // => [[], [1], [2], [1, 2]]
 */
export function * subsets(arr:any[]) {
   const max = 1 << arr.length
   for (let i = 0; i < max; i++)
      yield arr.filter((_, j) => 1 << j & i)
}

export const powerset = (arr: any[]) => Array.from(
   { length: 1 << arr.length },
   (_, i) => arr.filter((_, j) => 1 << j & i)
)

export const pluckSubset = (arr:any[], i:number) => arr.filter((_, j) => 1 << j & i)
