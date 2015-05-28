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
    foo: false, // ! strange but works
    roo: 12345, //! line
    bar: 'baz // in string comment', 
    baz: 'qux /* block in */ string', /* block comment */
    qux: 123 /*! ignore */
  }
}
