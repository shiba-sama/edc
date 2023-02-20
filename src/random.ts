// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Random

export function randomInts(n:number, bits:8|16|32): Uint8Array | Uint16Array | Uint32Array
export function randomInts(n, bits=32) {
   switch(bits) {
      case 8: return crypto.getRandomValues(new Uint8Array(n))
      case 16: return crypto.getRandomValues(new Uint16Array(n))
      case 32: return crypto.getRandomValues(new Uint32Array(n))
      default: throw Error(`Unsupported number of bits: ${bits}`)
   }
}

/** Generates random alphanumeric string. */
export function randomString(length:number) {
   const bytes = new Uint8Array(Math.ceil(length / 2))
   crypto.getRandomValues(bytes)
   return Array
      .from(bytes, byte => byte.toString(16).padStart(2, "0"))
      .join("")
      .substring(0, length)
}