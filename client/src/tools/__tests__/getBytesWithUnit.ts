import { describe, expect, test } from 'vitest';
import { getBytesWithUnit } from '../getBytesWithUnit';

describe('getBytesWithUnit', () => {
  test('can convert a bytes value into the most appropriate unit', () => {
    expect(getBytesWithUnit(512)).toBe('512 bytes');
    expect(getBytesWithUnit(1024)).toBe('1 KB');
    expect(getBytesWithUnit(1024 * 1024)).toBe('1 MB');
    expect(getBytesWithUnit(1024 * 1024 * 1024)).toBe('1 GB');
    expect(getBytesWithUnit(1024 * 1024 + 1024 * 512)).toBe('1.5 MB');
  });

  test('can convert a bytes value into the most appropriate unit with a given precision', () => {
    expect(getBytesWithUnit(9766)).toBe('9.54 KB');
    expect(getBytesWithUnit(9766, 3)).toBe('9.537 KB');
    expect(getBytesWithUnit(9766, 1)).toBe('9.5 KB');
  });
});
