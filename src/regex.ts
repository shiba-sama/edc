// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Regular Expressions

export const quotes = /[""]+/g
export const letter = /^[a-z]$/i
export const word = /^[a-z]+$/i
export const CR = /\r/g // Global match for Windows "carriage return" character.

export const alphabetical = /[a-zA-Z]/g

/** Globally capture any substring which is a natural number. */
export const natural = /[1-9]\d*/g

/** Matches on whether the string is exactly a digit from `0`...`9`. */
export const isDigit = /^\d$/