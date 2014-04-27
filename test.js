'use strict';

var fromarray = require('./');
var toarray = require('toarray');
var test = require('tape');

test('fromarray zero-element', function(t) {
  t.equal(fromarray([]), undefined);
  t.end();
});

test('fromarray one-element', function(t) {
  t.equal(fromarray([7]), 7);
  t.end();
});

test('fromarray many-element', function(t) {
  t.deepEqual(fromarray([6,7,8]), [6,7,8]);
  t.end();
});

test('fromarray non-array', function(t) {
  t.equal(fromarray(undefined), undefined);
  t.equal(fromarray(null), null);

  t.equal(fromarray(false), false);
  t.equal(fromarray(true), true);
  t.equal(fromarray(0), 0);
  t.equal(fromarray(1), 1);
  t.deepEqual(fromarray({}), {});
  t.deepEqual(fromarray({1:2, 3:4}), {1:2, 3:4});
  t.equal(fromarray(3.14), 3.14);

  t.end();
});

test('fromarray array-like', function(t) {
  t.equal(fromarray({length:0}), undefined);
  t.equal(fromarray({length:1, 0:4}), 4);

  t.end();
});

test('toarray/fromarray roundtrip', function(t) {
  t.equal(fromarray(toarray(undefined)), undefined);
  t.equal(fromarray(toarray(42)), 42);
  t.deepEqual(fromarray(toarray([1,2,3])), [1,2,3]);

  t.end();
});
