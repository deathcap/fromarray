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

test('fromarray invalid', function(t) {
  t.throws(function() {
    fromarray(undefined);
  });

  t.throws(function() {
    fromarray(null);
  });

  t.end();
});
