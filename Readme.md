
# concat-iterator

  concat two or more iterators into one

  [![Build Status](https://travis-ci.org/jb55/concat-iterator.png)](https://travis-ci.org/jb55/concat-iterator)

## Installation

  Install with npm

    $ npm install concat-iterator

## Example

```js
'use strict';

let concat = require('concat-iterator');

function* males() {
  yield "bill,25"
  yield "john,22"
}

function* females() {
  yield "jill,28"
  yield "alice,20"
}

let data = concat(males(), females() /*, ...*/);

for (let row of data) {
  console.log(row);
}

// "bill,25"
// "john,22"
// "jill,28"
// "alice,20"
```


## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
