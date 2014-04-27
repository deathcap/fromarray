# fromarray

The opposite of [toarray](https://www.npmjs.org/package/toarray)

[![Build Status](https://travis-ci.org/deathcap/fromarray.png)](https://travis-ci.org/deathcap/fromarray)

Usage:

    var fromarray = require('fromarray');

    console.log(fromarray([]));       // undefined
    console.log(fromarray(['test']);  // 'test'
    console.log(fromarray([1,2,3]));  // [1,2,3]

Possibly useful when you have an array but want a scalar.

## License

MIT

