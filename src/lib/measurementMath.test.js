import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateScreenMetrics, convertLength } from './measurementMath.js';

const approximatelyEqual = (actual, expected, tolerance = 1e-9) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} is not within ${tolerance} of ${expected}`);
};

test('converts one inch exactly to centimeters and millimeters', () => {
  assert.equal(convertLength(1, 'inch', 'cm'), 2.54);
  assert.equal(convertLength(1, 'inch', 'mm'), 25.4);
});

test('converts metric values in both directions', () => {
  assert.equal(convertLength(10, 'cm', 'mm'), 100);
  approximatelyEqual(convertLength(25.4, 'mm', 'inch'), 1);
  approximatelyEqual(convertLength(2.54, 'cm', 'inch'), 1);
});

test('preserves a length through a round trip', () => {
  const inches = convertLength(37.8, 'cm', 'inch');
  approximatelyEqual(convertLength(inches, 'inch', 'cm'), 37.8);
});

test('calculates physical dimensions for a 15.6-inch 16:9 screen', () => {
  const result = calculateScreenMetrics({
    diagonalInches: 15.6,
    aspectWidth: 16,
    aspectHeight: 9,
    pixelWidth: 1920,
    pixelHeight: 1080,
  });

  approximatelyEqual(result.widthInches, 13.59658, 0.00001);
  approximatelyEqual(result.heightInches, 7.64808, 0.00001);
  approximatelyEqual(result.widthCm, 34.53531, 0.00001);
  approximatelyEqual(result.heightCm, 19.42611, 0.00001);
  approximatelyEqual(result.ppi, 141.212, 0.001);
});

test('rejects zero or negative screen values', () => {
  assert.throws(
    () => calculateScreenMetrics({ diagonalInches: 0, aspectWidth: 16, aspectHeight: 9, pixelWidth: 1920, pixelHeight: 1080 }),
    RangeError,
  );
});
