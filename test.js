'use strict';

var fromarray = require('./');
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
  t.equal(fromarray(undefined) === undefined, true);
  t.equal(fromarray(null) === null, true);

  t.equal(fromarray(false) === false, true);
  t.equal(fromarray(true) === true, true);
  t.equal(fromarray(0), 0);
  t.equal(fromarray(1), 1);
  t.deepEqual(fromarray({}), {});
  t.deepEqual(fromarray({1:2, 3:4}), {1:2, 3:4});
  t.equal(fromarray(3.14), 3.14);

  t.end();
});
