/*!
 * acorn-strip-comments <https://github.com/tunnckoCore/acorn-strip-comments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

// var test = require('assertit')
var acornStripComments = require('./index')

// test('acorn-strip-comments:', function () {
//   // body
// })

var fs = require('fs')
var input = fs.readFileSync('./fixture.js', 'utf8')
console.log(acornStripComments.block(input, {preserve: false}))
