import { expect, test } from 'vitest';
import { isOctave } from '../isOctave';

test('returns true for user account type as "BROOKLYN"', () => {
  expect(isOctave({ account: { type: 'BROOKLYN' } })).toBe(true);
});

test('returns false for account type other than "BROOKLYN"', () => {
  ['brooklyn', 'brk', 'test', '!@#QWERTY@23'].forEach((accountType) => {
    expect(isOctave({ account: { type: accountType } })).toBe(false);
  });
});
