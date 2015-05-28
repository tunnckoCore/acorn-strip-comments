/*!
 * acorn-strip-comments <https://github.com/tunnckoCore/acorn-strip-comments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var acornStripComments = require('./index')

function fixture () {
  return fs.readFileSync('./fixtures/actual.js', 'utf8')
}
function expect (name) {
  return fs.readFileSync('./fixtures/expected/' + name + '.js', 'utf8')
}

test('acorn-strip-comments:', function () {
  test('should throw TypeError if not a string given', function (done) {
    function fixture () {
      acornStripComments([1, 2, 3])
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /acorn-strip-comments expect a string/)
    done()
  })
  test('should strip all comments without these that are ignored', function (done) {
    var actual = acornStripComments(fixture())
    var expected = expect('strip-all-default')

    test.equal(actual, expected)
    done()
  })
  test('should strip all comments {preserve: false}', function (done) {
    var actual = acornStripComments(fixture(), {preserve: false})
    var expected = expect('strip-all')

    test.equal(actual, expected)
    done()
  })
  test('should strip only block comments without these that are ignored', function (done) {
    var actual = acornStripComments.block(fixture())
    var expected = expect('strip-block-default')

    test.equal(actual, expected)
    done()
  })
  test('should strip all block comments {preserve: false}', function (done) {
    var actual = acornStripComments.block(fixture(), {preserve: false})
    var expected = expect('strip-block')

    test.equal(actual, expected)
    done()
  })
  test('should strip only line comments without these that are ignored', function (done) {
    var actual = acornStripComments.line(fixture())
    var expected = expect('strip-line-default')

    test.equal(actual, expected)
    done()
  })
  test('should strip all line comments {preserve: false}', function (done) {
    var actual = acornStripComments.line(fixture(), {preserve: false})
    var expected = expect('strip-line')

    test.equal(actual, expected)
    done()
  })
})
