import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('rounds integer precision', () => {
  assert.equal(api.roundDecimal(1.6), 2);
});
test('rounds decimal places', () => {
  assert.equal(api.roundDecimal(1.234, 2), 1.23);
});
test('handles common floating midpoint', () => {
  assert.equal(api.roundDecimal(1.005, 2), 1.01);
});
test('rounds negative places', () => {
  assert.equal(api.roundDecimal(1234, -2), 1200);
});
test('normalizes negative zero', () => {
  assert.equal(api.roundDecimal(-0.1), 0);
});
test('rejects non-finite values', () => {
  assert.throws(() => api.roundDecimal(Infinity), TypeError);
});
