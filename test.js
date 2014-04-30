'use strict';

let expect = require('expect.js')
let concat = require('./');

function* numbers() {
  yield 1;
  yield 2;
}

describe('concat-iterator', function(){
  describe('two iterators', function(){
    it('should yield the values twice', function(){
      let two = concat(numbers(), numbers())

      expect(two.next().value).to.be(1);
      expect(two.next().value).to.be(2);
      expect(two.next().value).to.be(1);
      expect(two.next().value).to.be(2);
      expect(two.next().done).to.be(true);
    });
  });

  describe('zero case', function() {
    it('should yield nothing', function(){
      let zero = concat()
      expect(zero.next().done).to.be(true);
    });
  })

  describe('one case', function() {
    it('should yield the values in the iterator', function(){
      let one = concat(numbers())
      expect(one.next().value).to.be(1);
      expect(one.next().value).to.be(2);
      expect(one.next().done).to.be(true);
    })
  })
});
