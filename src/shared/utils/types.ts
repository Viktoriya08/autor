/**
 * @type {HtmlAttrs}:
 *
 * Used to define the type for HTML-friendly attributes
 * such as data-*, aria-*, role and other
 * */
export type HtmlAttrs = string | number | boolean | undefined

/**
 * ===[ A set of types for different element definitions ]===
 * */

/**
 * When 'null' can be returned:
 * @type {HTMLElement | null} */
export type NullishHTMLElem = HTMLElement | null

/**
 * When 'undefined' can be returned:
 * @type {HTMLElement | undefined} */
export type UndefinedishHTMLElem = HTMLElement | undefined

/**
 * When 'null | undefined' can be returned:
 * @type {HTMLElement | undefined | null} */
export type UndefNullishHTMLElem = HTMLElement | undefined | null
