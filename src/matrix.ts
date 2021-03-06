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
const length = (v:number[]) => Math.hypot(...v)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

Object.defineProperties(Array.prototype, {
   last: {
      get() { return this.at(-1) },
      set(v) { this[this.length - 1] = v }
   },
})

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

console.log(
   [1, 2, 3].scale(3)
)

export default {}