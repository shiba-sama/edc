// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Imports



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Functions

type value = string|number|bigint|boolean

/**
 * For creating PostgreSQL tuples. Requires arrays with any mixture of 
 * `number`, `bigint`, `string` or `boolean`.
 * @example
 * parens([1, 2, 3])  // → '(1, 2, 3)'
 */
export const parens = (arr: value[]) => '('.concat(arr.join(','), ')')

/**
 * Surrounds a `string`, `number` or `bigint` with a layer of single 
 * quotation marks.
 * @example
 * quote(23n)    // => '23'
 * quote("m")    // => "'m'"
 * quote('m')    // => "'m'"
 * quote(`m`)    // => "'m'"
 * quote("'m'")  // => "''m''"
 */
export const quote = (val:string|number|bigint) => `"${val}"`

/**
 * For PostgreSQL position-based parameters.
 *
 * https://www.postgresql.org/docs/current/sql-prepare.html
 * @example
 * $list(0)  // → '()'
 * $list(3)  // → '($1, $2, $3)'
 */
export const $list = (length:number) => parens(
   Array.from({ length }, (_, v) => v + 1)
      .map(num => `$${num}`)
)

/**
 * Splits a TSV file into an array of rows, where every row is an array of
 * values based on the tab delimiter.
 * - Strips out all "end of line" or "carriage return" characters.
 */
export const TSV_into_rows = (tsv:string) => tsv
   .replaceAll('\r', '')
   .split('\n')
   .map(str => str.split('\t').map(quote))

/**
 * Promise which delays by `timeout` in milliseconds and then resolves to `msg`.
 * - default value for `timeout` is 1000 milliseconds
 * - default value for `msg` is `undefined`
 * @example
 * const response = await Promise.race[fetch(url), delay(2000, 'TIMEOUT')]
 */
export function delay<T>(ms:number, msg:T):Promise<T>
export function delay(ms?:number):Promise<undefined>
export function delay(ms:number=1000, msg=undefined) {
   return new Promise(yes => setTimeout(yes, ms, msg))
}

/**
 * Logs input `msg` and returns `msg`.
 * @example
 * fetch('https://example.com')
 *   .then(r => r.json())
 *   .then(log)
 */
export function log<T>(msg:T): T {
   console.log(msg)
   return msg
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   parens,
   quote,
   $list,
   log,
}
