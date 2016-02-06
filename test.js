/*!
 * acorn-strip-comments <https://github.com/tunnckoCore/acorn-strip-comments>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var strip = require('./index')

function fixture () {
  return fs.readFileSync('./fixtures/actual.js', 'utf8')
}

function expect (name) {
  return fs.readFileSync('./fixtures/expected/' + name + '.js', 'utf8')
}

// function write (name, contents) {
//   return fs.writeFileSync('./fixtures/expected/' + name + '.js', contents)
// }

test('should throw TypeError if not a string given', function (done) {
  function fixture () {
    strip([1, 2, 3])
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /acorn-strip-comments expect a string/)
  done()
})

test('should strip all comments without these that are ignored', function (done) {
  var actual = strip(fixture())
  var expected = expect('strip-all-default')

  test.strictEqual(actual, expected)
  done()
})

test('should strip all comments {preserve: false}', function (done) {
  var actual = strip(fixture(), {preserve: false})
  var expected = expect('strip-all')

  test.strictEqual(actual, expected)
  done()
})

test('should strip only block comments without these that are ignored', function (done) {
  var actual = strip.block(fixture())
  var expected = expect('strip-block-default')

  test.strictEqual(actual, expected)
  done()
})

test('should strip all block comments {preserve: false}', function (done) {
  var actual = strip.block(fixture(), {preserve: false})
  var expected = expect('strip-block')

  test.strictEqual(actual, expected)
  done()
})

test('should strip only line comments without these that are ignored', function (done) {
  var actual = strip.line(fixture())
  var expected = expect('strip-line-default')

  test.strictEqual(actual, expected)
  done()
})

test('should strip all line comments {preserve: false}', function (done) {
  var actual = strip.line(fixture(), {preserve: false})
  var expected = expect('strip-line')

  test.strictEqual(actual, expected)
  done()
})
