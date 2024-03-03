import { assert } from 'chai';
import { isFalsy } from './index.js';

describe('isFalsy', function () {
  it('should return true for an empty string', function () {
    const result = isFalsy('');
    assert.isTrue(result);
  });

  it('should return true for the number 0', function () {
    const result = isFalsy(0);
    assert.isTrue(result);
  });

  it('should return true for NaN (Not a Number)', function () {
    const result = isFalsy(NaN);
    assert.isTrue(result);
  });

  it('should return true for null', function () {
    const result = isFalsy(null);
    assert.isTrue(result);
  });

  it('should return true for undefined', function () {
    const result = isFalsy(undefined);
    assert.isTrue(result);
  });

  it('should return true for an empty array', function () {
    const result = isFalsy([]);
    assert.isTrue(result);
  });

  it('should return true for an empty object', function () {
    const result = isFalsy({});
    assert.isTrue(result);
  });

  it('should return true for false boolean', function () {
    const result = isFalsy(false);
    assert.isTrue(result);
  });

  it('should return true for custom falsy condition (requiredProperty check)', function () {
    const result = isFalsy({ requiredProperty: false });
    assert.isTrue(result);
  });

  it('should return false for a truthy value (non-empty string)', function () {
    const result = isFalsy('Hello, World!');
    assert.isFalse(result);
  });

  it('should return false for a truthy value (non-zero number)', function () {
    const result = isFalsy(42);
    assert.isFalse(result);
  });

  it('should return false for a truthy value (non-empty array)', function () {
    const result = isFalsy([1, 2, 3]);
    assert.isFalse(result);
  });

  it('should return false for a truthy value (non-empty object)', function () {
    const result = isFalsy({ someProperty: 'value' });
    assert.isFalse(result);
  });
});
