// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Characters and Strings

export const line      = "\n"
export const tab       = "\t"
export const comma     = ","
export const semicolon = ";"
export const dot       = "."
export const space     = " "
export const char      = ""
export const alphabet  = "abcdefghijklmnopqrstuvwxyz"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Time

/** Start of unix epoch. */
export const epoch = "Thu, 01 Jan 1970 00:00:00 GMT"
export const minute = 60
export const hour = 3600
export const day = 86400

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Color

export const teal = "\x1b[36m%s\x1b[0m"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Math

export const sin = Math.sin
export const cos = Math.cos
export const π   = Math.PI

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HTTP

// As of March 2022 these are still case sensitive
export const GET    = "GET" as const
export const POST   = "POST" as const
export const PUT    = "PUT" as const
export const DELETE = "DELETE" as const

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Beautiful

const animal = [
   "𐦐",
   "𐦖",
   "𐦉",
   "𐙼",
   "𐜶",
   "𐚲",
   "𓅭",
   "𓅬",
   "𓅯",
   "𓄿",
   "𓅺",
   "𓃰",
   "𐂃",
   "𐂂",
]

const human = [
   "𐙞",
   "𐘿",
   "𐙬",
]

const geometric = [
   "𐦕",
   "𐩰",
   "𐦔",
   "𐦏",
]

const graph = [
   "𐩢",
   "𐙢",
   "𐚔",
   "𐩻",
   "𐩺",
   "𐩼",
   "𐩮",
   "𐰭",
   "𐰮",
   "𐺄",
]

const ds = [
   "𐁖",
]

const math = [
   "𐝒",
   "𐘾",
   "𐌈",
   "𐌎",
]

const arrows = [
   "𐙤",
   "𐃘",
   "𐙘",
   "𐙥",
   "𐙣",
   "𐌮",
   "𐌣",
   "𐰶",
   "𐰷",
   "𐰹",
   "𐰸",
]


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
   letter,
   word,
   CR,

   sin,
   cos,
   π,

   GET,
   POST,
   PUT,
   DELETE,
}
