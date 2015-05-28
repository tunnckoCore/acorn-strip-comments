/*!
 * acorn-strip-comments <https://github.com/tunnckoCore/acorn-strip-comments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var acorn = require('acorn')
var extend = require('extend-shallow')

exports = module.exports = function stripAllComments (input, opts) {
  opts = extend({block: true, line: true}, opts)
  return acornStripComments(input, opts)
}

exports.block = function stripBlockComments (input, opts) {
  opts = extend({block: true}, opts)
  return acornStripComments(input, opts)
}

exports.line = function stripLineComments (input, opts) {
  opts = extend({line: true}, opts)
  return acornStripComments(input, opts)
}

/**
 * > Core logic for strip comments
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
  opts = opts || {}
  opts.ecmaVersion = opts.ecmaVersion || 6

  var preserve = opts.preserve === false ? false : true // eslint-disable-line no-unneeded-ternary
  var block = opts.block || false
  var line = opts.line || false
  var isIgnore = opts.ignore || defaultIsIgnore
  var comments = opts.onComment = []

  acorn.parse(input, opts)
  comments.filter(function (comment, i) {
    if (preserve && isIgnore(comment.value)) return

    if (block && comment.type === 'Block') {
      input = input.split('/*' + comment.value + '*/').join('')
    }
    if (line && comment.type === 'Line') {
      input = input.split('//' + comment.value).join('')
    }
  })
  return input
}

/**
 * > Default ignore/preserve check function
 *
 * @param  {String} `val`
 * @return {String}
 * @api private
 */
function defaultIsIgnore (val) {
  return val.charCodeAt(0) === 33 || val.charCodeAt(1) === 33
}
