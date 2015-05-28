/**
 * abcd description
 *
 * @name koaIpFilter
 * @param {Object} `options`
 */
exports.data = function () {
  /**!
   * full block comment
   */
  return {
    foo: false, 
    roo: 12345, 
    bar: 'baz // in string comment', 
    baz: 'qux /* block in */ string', /* block comment */
    qux: 123 /*! ignore */
  }
}
