# [acorn-strip-comments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Strip code comments from a string, using `acorn` javascript parser.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i acorn-strip-comments --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const acornStripComments = require('acorn-strip-comments')
```

### [acornStripComments](index.js#L42)
> Strip all code comments, but not these that are marked as "ignored" like (`//!` and `/*!`).  
> Pass `opts.preserve: false` to remove even them.

**Params**

* `<input>` **{String}**: string from which to get comments    
* `[opts]` **{Object}**: optional options, passed to `acorn-extract-comments` and `acorn`  
  - `ast` **{Boolean}**: if `true` the ast is added to the resulting array
  - `line` **{Boolean}**: if `false` get only block comments, default `true`
  - `block` **{Boolean}**: if `false` get line comments, default `true`
  - `ignore` **{Function}**: check function, default check comment starts with `!`
  - `preserve` **{Boolean}**: if `true` keep comments that are ignored (that pass the `opts.ignore` check)
  - `locations` **{Boolean}**: if `true` result will include `acorn/esprima` format comment location object
  - `ecmaVersion` **{Number}**: defaults to `6`, acorn parsing version
* `returns` **{String}**: modified string  

**Example**

```js
const fs = require('fs')
const strip = require('acorn-strip-comments')

const str = fs.readFileSync('./index.js', 'utf8')
const output = strip(str, {})
// => modified and cleaned string
```

### [.line](index.js#L70)
> Remove only line comments.

**Params**

* `<input>` **{String}**: string from which to get comments    
* `[opts]` **{Object}**: optional options, passed to `acorn-extract-comments` and `acorn`    
* `returns` **{String}**: modified string  

**Examples**

```js
const output = strip(str, {block: false})
// => modified and cleaned string
```

or through method

```js
const output = strip.line(str)
// => modified and cleaned string
```

### [.block](index.js#L98)
> Remove only block comments.

**Params**

* `<input>` **{String}**: string from which to get comments    
* `[opts]` **{Object}**: optional options, passed to `acorn-extract-comments` and `acorn`    
* `returns` **{String}**: modified string  

**Examples**

```js
const output = strip(str, {line: false})
// => modified and cleaned string
```

or through method

```js
const output = strip.block(str)
// => modified and cleaned string
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/acorn-strip-comments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/acorn-strip-comments
[npmjs-img]: https://img.shields.io/npm/v/acorn-strip-comments.svg?label=acorn-strip-comments

[license-url]: https://github.com/tunnckoCore/acorn-strip-comments/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/acorn-strip-comments
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/acorn-strip-comments.svg

[travis-url]: https://travis-ci.org/tunnckoCore/acorn-strip-comments
[travis-img]: https://img.shields.io/travis/tunnckoCore/acorn-strip-comments.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/acorn-strip-comments
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/acorn-strip-comments.svg

[david-url]: https://david-dm.org/tunnckoCore/acorn-strip-comments
[david-img]: https://img.shields.io/david/tunnckoCore/acorn-strip-comments.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg