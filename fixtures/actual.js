/**
 * abcd description
 *
 * @name koaIpFilter
 * @param {Object} `options`
 */
exports.data = function () {
  /**
   * [foo description]
   * @type {String}
   */
  var foo = 'foo bar baz' // comment

  /**!
   * full block comment
   */
  return {
    foo: foo, // ! strange but works
    roo: 12345, //! line
    bar: 'baz // in string comment', // comment
    baz: 'qux /* block in */ string', /* block comment */
    qux: 123 /*! ignore */
  }
}

/**
 * [block description]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
exports.block = function (num) {
  var n = 11 // comment
  /**
   * return boolean
   * @type {[type]}
   */
  return num === 123 + n // comment
}
