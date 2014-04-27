'use strict';

module.exports = function(a) {
  if (!a) return a;
  if (a.length === 0) return undefined;
  if (a.length === 1) return a[0];
  return a;
};
