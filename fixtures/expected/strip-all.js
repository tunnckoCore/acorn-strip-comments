
exports.data = function () {
  
  var foo = 'foo bar baz' 

  
  return {
    foo: foo, 
    roo: 12345, 
    bar: 'baz // in string comment', 
    baz: 'qux /* block in */ string', 
    qux: 123 
  }
}


exports.block = function (num) {
  var n = 11 
  
  return num === 123 + n 
}
