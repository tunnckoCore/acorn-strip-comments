
exports.data = function () {
  
  var foo = 'foo bar baz' // comment

  /**!
   * full block comment
   */
  return {
    foo: foo, // ! strange but works
    roo: 12345, //! line
    bar: 'baz // in string comment', // comment
    baz: 'qux /* block in */ string', 
    qux: 123 /*! ignore */
  }
}


exports.block = function (num) {
  var n = 11 // comment
  
  return num === 123 + n // comment
}
