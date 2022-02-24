// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Characters and Strings

export const line = '\n'
export const tab     = '\t'

export const comma    = ','
export const dot      = '.'
export const space    = ' '
export const char     = ''
export const alphabet = 'abcdefghijklmnopqrstuvwxyz'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Color

export const teal = '\x1b[36m%s\x1b[0m'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Regular Expressions

export const quotes = /['"]+/g

/** Global match for Windows "carriage return" character. */
export const CR = /\r/g

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Math

export const sin = Math.sin
export const cos = Math.cos
export const π   = Math.PI

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   line,
   tab,
   comma,
   dot,
   space,
   char,
   alphabet,
   teal,
   quotes,
   CR,
   sin,
   cos,
   π,
}