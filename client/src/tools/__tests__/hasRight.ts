import { expect, test } from 'vitest';
import { hasRight } from '../hasRight';

test('returns true for user with given right', () => {
  expect(hasRight({ rights: ['read', 'write'] }, 'write')).toBe(true);
});

test('returns false for user without given right', () => {
  expect(hasRight({ rights: ['read'] }, 'write')).toBe(false);
});

test('returns false for user with no rights', () => {
  expect(hasRight({ rights: [] }, 'read')).toBe(false);
});
