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
  var foo = 'foo bar baz' 

  /**!
   * full block comment
   */
  return {
    foo: foo, 
    roo: 12345, 
    bar: 'baz // in string comment', 
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
  var n = 11 
  /**
   * return boolean
   * @type {[type]}
   */
  return num === 123 + n 
}
