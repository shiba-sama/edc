import { epoch } from "./constants.ts"

type CookiesObject = {
   [key: string]: string
}

const key_value = /([^\s,=]+)=([^,]+)(?=,|$)/g

/** Maps raw `cookie` string from to a key-value object.
 - assumes that cookies are fully URI encoded (optional but often true)
 - trims illegal whitespaces from cookie values
 - maps `"value"` → `value`
 - client and server libraries across communities are inconsistent
 - brackets may be reasonable [despite standard](https://github.com/js-cookie/js-cookie/issues/595)
 - https://httpwg.org/specs/rfc6265.html#sane-set-cookie
*/
export function getCookies(cookies:string|null): Record<string, string> {
   const regex = /^([^=]+)=([^;]*)/
   const pairs = cookies
      ? cookies.split("; ")
         .map(cookie => {
            let [_, key, value] = regex.exec(cookie) ?? []
            if (value[0] === '"') value = value.slice(1, -1)
            return [decodeURIComponent(key), decodeURIComponent(value?.trim() ?? "")]
         })
         .filter(([key, _]) => key)
      : []

   return Object.fromEntries(pairs)
}

/** Maps cookie `key` to cookie deletion string. */
export function deleteCookie(key:string) {
   return `${key}=; expires=${epoch};`
}

/** Browser utility for deleting cookies with `keys`. */
export function deleteCookies(keys:string[]) {
   for (const k of keys) document.cookie = deleteCookie(k)
}