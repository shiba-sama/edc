// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Random

function randomInts(n, bits=32) {
   switch (bits) {
      case 8: return window.crypto.getRandomValues(new Uint8Array(n))
      case 16: return window.crypto.getRandomValues(new Uint16Array(n))
      case 32: return window.crypto.getRandomValues(new Uint32Array(n))
      default: throw Error(`Unsupported number of bits: ${bits}`) 
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

function repeat(λ:Function, inputs:any[], times = 5) {
   const results: any[] = []
   for (let i = 0; i < times; i++) results.push(λ(...inputs))
   return results
}

export default {
   randomInts,
}
