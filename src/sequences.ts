import { typeName } from './typing.ts'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Sequences

function naturals(max: number): Generator<number, any, number>
function * naturals(max = 0) {
   if (!Number.isSafeInteger(max) || max < 0) throw Error(
      `<max> :: ${max} must be natural but received type ${typeName(max)}.`
   )
   let n = 0
   while (n < max) yield n++
}
 
function range(min:number, max:number): Generator<number, void, number>
function * range(min, max) {
   if (![min, max].every(Number.isSafeInteger) || min === max ) throw Error(
      `Inputs ${min} and ${max} must be different integers.`
   )
   if (min < max) while (min <= max) yield min++
   else while (max <= min) yield min--
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   naturals,
   range,
}
