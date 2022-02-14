import { typeName } from './typing.ts'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Sequences

function * naturals(max=0) {
   if (!Number.isSafeInteger(max) || max < 0) throw Error(
      `<max> :: ${max} must be natural but received type ${typeName(max)}.`
   )
   let n = 0
   while (n < max) yield n++
}
 
function * range(上:number, 下:number) {
   if (!Number.isSafeInteger(上) || !Number.isSafeInteger(下) || 上 === 下) {
      throw Error(`Inputs ${上} and ${下} must be different integers.`)
   }
   if (上 < 下) while (上 <= 下) yield 上++
   else while (下 <= 上) yield 上--
}
