// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Type Checking

/**
 * Returns the type of an unknown value as a lower-cased string.
 *  - Type `number` is distinguished from `NaN` and `Infinity`.
 *  - Prototype names for instances are reported.
 *  - `Error` objects are undistinguished. See `errorName`.
 *
 * @example
 * typeName(new Map)  // => 'map'
 * typeName(null)     // => 'null'
 * typeName([])       // => 'array'
 * typeName({})       // => 'object'
 * typeName(/\s+/)    // => 'regexp'
 * typeName(NaN)      // => 'nan'
 * typeName(-1/0)     // => 'infinity'
 * typeName(0n)       // => 'bigint'
 * typeName(Error())  // => 'error'
 */
export function typeName(口) {
   const type = Reflect.toString.call(口).slice(8, -1).toLowerCase()
   if (type === 'number') {
      if (Number.isNaN(口)) return 'nan'
      if (!Number.isFinite(口)) return 'infinity'
   }
   return type
}

/**
 * Reports the subclass name of an error instance.
 * @example
 * errorName(Error())      // => 'Error
 * errorName(RangeError()) // => 'RangeError'
 */
export function errorName(err: Error) {
   if (!(err instanceof Error)) throw Error(
      `Parameter <err> must be an instance of Error. Received ${err}.`
   )

   const errors = Object.entries({
      EvalError,
      RangeError,
      ReferenceError,
      SyntaxError,
      TypeError,
      URIError,
   })

   for (const [k, v] of errors) if (err instanceof v) return k
   return 'Error'
}

export class isType {
   static str  = (口) => typeof 口 === 'string'
   static fn   = (口) => typeof 口 === 'function'
   static err  = (口) => 口 instanceof Error
   static map  = (口) => 口 instanceof Map
   static num  = (口) => Number.isFinite(口) || typeof 口 === 'bigint'
   static nat  = (口) => typeof 口 === 'bigint' ? 0n <= 口 : Number.isSafeInteger(口) && 0 <= 口
   static int  = (口) => Number.isSafeInteger(口) || typeof 口 === 'bigint'
   static neg  = (口) => typeof 口 === 'bigint' ? 口 < 0n : Number.isFinite(口) && Math.sign(口) === -1
   static pos  = (口) => typeof 口 === 'bigint' ? 0n < 口 : Number.isFinite(口) && Math.sign(口) === 1
}

export class isEmpty {
   static arr = (口) => Array.isArray(口) && 口.length === 0
   static obj = (口, ignore_symbol=true) => typeName(口) === 'object' 
      && Object.keys(口).length === 0
      && (ignore_symbol || Object.getOwnPropertySymbols(口).length === 0)
   static str = (口) => typeof 口 === 'string' && 口.length === 0
   static map = (口) => 口 instanceof Map && 口.size === 0
}

export class notEmpty {
   static arr = (口) => Array.isArray(口) && 口.length !== 0
   static obj = (口, ignore_symbol=true) => typeName(口) === 'object' 
      && Object.keys(口).length !== 0
      || (ignore_symbol || Object.getOwnPropertySymbols(口).length !== 0)
      // compare performance against JSON.stringify('{}')
   static str = (口) => typeof 口 === 'string' && 口.length !== 0
   static map = (口) => 口 instanceof Map && 口.size !== 0
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   typeName,
   errorName,
   isType,
   isEmpty,
   notEmpty,
}
