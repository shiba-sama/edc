// —————————————————————————————————————————————————————————————————————————————
// Environment

class Node<T> {
   口: T
   kids: Node<T>[] = []
   constructor(口:T) { this.口 = 口 }
}

// —————————————————————————————————————————————————————————————————————————————
// Binary Heap

export default class BinaryHeap<T> {
   品: T[] = [0 as unknown as T]
   #λ: (一:T, 二:T) => boolean

   get top(): T | undefined { return this.品[1] }
   get size() { return this.品.length - 1 }
   get serialize() { return this.品.slice(1) }

   constructor(λ = (一:T, 二:T) => 一 < 二) { this.#λ = λ }

   #swap(一:number, 二:number) {
      [this.品[一], this.品[二]] = [this.品[二], this.品[一]]
   }

   #up() {
      let i = this.size
      while (i > 1 && this.#λ(this.品[i], this.品[i >> 1])) this.#swap(i, i >>= 1)
   }

   #down(i = 1) {
      const L = i << 1
      const R = L + 1
      let 大 = i
      if (L <= this.size && this.#λ(this.品[L], this.品[大])) 大 = L
      if (R <= this.size && this.#λ(this.品[R], this.品[大])) 大 = R
      if (大 !== i) this.#swap(i, 大), this.#down(大)
   }

   in(口:T) { this.品.push(口), this.#up() }

   out() {
      if (this.size === 0) return undefined
      if (this.size === 1) return this.品.pop()
      const top = this.top
      this.品[1] = this.品.pop()!
      this.#down()
      return top
   }

   *iter(): IterableIterator<T> {
      for (let i = this.size; 0 < i; i--) yield this.out()!
   }
}