// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Import

import { typeName } from './typing.ts'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Type

declare global {
   interface Array<T> {
      /** Returns the last element of the array. */
      last: T

      /** Checks if all elements are numerical. */
      isVector(): boolean

      /** Finds the L2 norm of a vector. */
      norm(): number

      /** Adds a vector to this vector. */
      add(vec: number[]): number[]

      /** Returns a scaled copy. */
      scale(scalar:number): number[]
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

// function transpose(matrix) {
//    return matrix.reduce((prev, next) => next.map((item, i) =>
//      (prev[i] || []).concat(next[i])
//    ), []);
// }

// function transpose(matrix) {
//    for (var i = 0; i < matrix.length; i++) {
//      for (var j = 0; j < i; j++) {
//        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//      }
//    }
// }

const isVec = (v:number[]) => v.every(n => typeName(n) === 'number')
const isMat = (m:number[][]) => m.every(isVec)
const norm = (v:number[]) => Math.hypot(...v)

/** Paths from a given point in a grid or matrix. */
export function* getPaths(x:number, y:number, max:number) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
  for (const [Δx, Δy] of directions) {
    const [xF, yF] = [x + Δx, y + Δy]
    if (max < xF || xF < 0 || max < yF || yF < 0) continue
    yield [xF, yF] as const
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

Object.defineProperties(Array.prototype, {
   last: {
      get() { return this[this.length - 1] },
      set(v) { this[this.length - 1] = v }
   },
})

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

console.log(
   [1, 2, 3].scale(3)
)

export default {}