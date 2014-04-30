'use strict';

// if you are reading this and node
// has proper array-like iterators, please
// remove this and send a PR
let arr = require('array-iterator');

module.exports = function*() {
  for (let iter of arr(arguments))
    for (let x of iter)
      yield x;
}
