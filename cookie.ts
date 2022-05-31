type CookiesObject = {
   [key: string]: string
}

const key_value = /([^\s,=]+)=([^,]+)(?=,|$)/g

/**
 * A collection of static methods for the manipulation of cookies.
 * @example
 * const cookies = Cookies.get()
 * Cookies.set({ user: "meow" })
 */
class Cookies {
   /**
    * Obtain a map of cookies.
    * WIP: Cookie parsing has errors.
    * @example
    * const cookies = Cookies.get()
    */
   static get(): CookiesObject {
      const tuples = document.cookie.split(";")
      return document.cookie
         ? Object.fromEntries(document.cookie.split(";").map(c => c.trim().split("=")))
         : null
   }

   /**
    * Delete a specific cookie by key.
    */
   static delete(...keys:string[]) {
      for (const key of keys)
         document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
   }

   /**
    * Delete all cookies.
    */
   static clear() {
      for (const key in Cookies.get())
         Cookies.delete(key)
   }

   /**
    * Add or update multiple cookie entries.
    * @example
    * Cookies.set({ user: "meow", token: "moo", })
    */
   static set(tuples: CookiesObject) {
      for (const key in tuples)
         document.cookie = `${key}=${tuples[key]}`
   }
}