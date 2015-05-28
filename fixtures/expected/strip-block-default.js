
exports.data = function () {
  /**!
   * full block comment
   */
  return {
    foo: false, // ! strange but works
    roo: 12345, //! line
    bar: 'baz // in string comment', // comment
    baz: 'qux /* block in */ string', 
    qux: 123 /*! ignore */
  }
}
