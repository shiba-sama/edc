import { typeName } from './typing.ts'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Sequences

function naturals(max: number): Generator<number, any, number>
function * naturals(max = 0) {
   if (!Number.isSafeInteger(max) || max < 0) throw Error(
      `<max> :: ${max} must be natural but received type ${typeName(max)}.`
   )
   for (let i=0; i<max; i++) yield i
}

function * range(一:number, 二:number) {
   if (![一, 二].every(Number.isSafeInteger) || 一 === 二 ) throw Error(
      `Inputs ${一} and ${二} must be different integers.`
   )
   if (一 < 二) while (一 <= 二) yield 一++
   else while (二 <= 一) yield 一--
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   naturals,
   range,
}