export function roundDecimal(value: number, places = 0): number {
  if (!Number.isFinite(value)) throw new TypeError('Value must be finite');
  if (!Number.isInteger(places) || places < -100 || places > 100)
    throw new RangeError('Places must be an integer from -100 through 100');
  const factor = 10 ** places,
    result = Math.round((value + Math.sign(value) * Number.EPSILON) * factor) / factor;
  if (!Number.isFinite(result)) throw new RangeError('Rounded result is not finite');
  return Object.is(result, -0) ? 0 : result;
}
