declare enum ErrorType {
   "Error",
   "EvalError",
   "RangeError",
   "ReferenceError",
   "SyntaxError",
   "TypeError",
   "URIError",
}

declare type num = number
declare type str = string

declare type indicator = (x: unknown) => boolean
