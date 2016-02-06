/*!
 * acorn-strip-comments <https://github.com/tunnckoCore/acorn-strip-comments>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var extract = require('acorn-extract-comments')
var extend = require('extend-shallow')

/**
 * > Strip all code comments, but not these that are
 * marked as "ignored" like (`//!` and `/*!`).
 * Pass `opts.preserve: false` to remove even them.
 *
 * **Example**
 *
 * ```js
 * const fs = require('fs')
 * const strip = require('acorn-strip-comments')
 *
 * const str = fs.readFileSync('./index.js', 'utf8')
 * const comments = strip(str, {})
 * // => ['array', 'of', 'all', 'code', 'comments']
 * ```
 *
 * @name  acornStripComments
 * @param  {String} `<input>` string from which to get comments
 * @param  {Object} `[opts]` optional options, passed to `acorn-extract-comments` and `acorn`
 * @property {Boolean} [opts] `ast` if `true` the ast is added to the resulting array
 * @property {Boolean} [opts] `line` if `false` get only block comments, default `true`
 * @property {Boolean} [opts] `block` if `false` get line comments, default `true`
 * @property {Function} [opts] `ignore` check function, default check comment starts with `!`
 * @property {Boolean} [opts] `preserve` if `true` keep comments that are ignored (that pass the `opts.ignore` check)
 * @property {Boolean} [opts] `locations` if `true` result will include `acorn` location object
 * @property {Number} [opts] `ecmaVersion` defaults to `6`, acorn parsing version
 * @return {String} modified string
 * @api public
 */
exports = module.exports = function stripAllComments (input, opts) {
  opts = extend({line: true, block: true, preserve: true}, opts)
  return acornStripComments(input, opts)
}

/**
 * > Remove only line comments.
 *
 * **Example**
 *
 * ```js
 * const comments = strip(str, {block: false})
 * // => ['array', 'of', 'line', 'comments']
 * ```
 *
 * **Example**
 *
 * ```js
 * const comments = strip.line(str)
 * // => ['all', 'line', 'comments']
 * ```
 *
 * @name  .line
 * @param  {String} `<input>` string from which to get comments
 * @param  {Object} `[opts]` optional options, passed to `acorn`
 * @return {String} modified string
 * @api public
 */
exports.line = function stripLineComments (input, opts) {
  opts = extend({line: true, preserve: true}, opts)
  return acornStripComments(input, opts)
}

/**
 * > Remove only block comments.
 *
 * **Example**
 *
 * ```js
 * const comments = strip(str, {line: false})
 * // => ['array', 'of', 'block', 'comments']
 * ```
 *
 * **Example**
 *
 * ```js
 * const comments = strip.block(str)
 * // => ['array', 'of', 'block', 'comments']
 * ```
 *
 * @name  .block
 * @param  {String} `<input>` string from which to get comments
 * @param  {Object} `[opts]` optional options, passed to `acorn`
 * @return {String} modified string
 * @api public
 */
exports.block = function stripBlockComments (input, opts) {
  opts = extend({block: true, preserve: true}, opts)
  return acornStripComments(input, opts)
}

/**
 * > Core logic for strip comments.
 *
 * @param  {String} `<input>`
 * @param  {Object} `[opts]`
 * @return {String}
 * @api private
 */
function acornStripComments (input, opts) {
  if (typeof input !== 'string') {
    throw new TypeError('acorn-strip-comments expect a string')
  }
  if (!input.length) return ''

  opts = extend({ignore: defaultIsIgnore}, opts)
  var comments = extract(input, opts)
  var len = comments.length
  var i = 0

  while (i < len) {
    var comment = comments[i++]
    input = discard(input, comment, opts)
  }
  return input
}

/**
 * > Remove a comment from the given `input` string.
 *
 * @param  {String} `input`
 * @param  {Object} `comment`
 * @param  {Object} `opts`
 * @return {String}
 * @api private
 */
function discard (input, comment, opts) {
  var ignore = opts.preserve && opts.ignore(comment.value)
  ignore = ignore === false ? false : ignore

  if (!ignore && opts.line && comment.type === 'Line') {
    input = input.replace('//' + comment.value, '')
  }
  if (!ignore && opts.block && comment.type === 'Block') {
    input = input.replace('/*' + comment.value + '*/', '')
  }
  return input
}

/**
 * > Default ignore/preserve check function.
 *
 * @param  {String} `val`
 * @return {String}
 * @api private
 */
function defaultIsIgnore (val) {
  return val.charCodeAt(0) === 33 || val.charCodeAt(1) === 33
}
