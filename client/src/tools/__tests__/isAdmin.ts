import { expect, test } from 'vitest';
import { RIGHT_KEYS } from '../../constants/RIGHT_KEYS';
import { isAdmin } from '../isAdmin';

test('returns true for admin user', () => {
  expect(isAdmin({ rights: [RIGHT_KEYS.AIRVANTAGE_ADMINISTRATION] })).toBe(true);
});

test('returns false for non-admin user', () => {
  expect(isAdmin({ rights: [RIGHT_KEYS.ACCOUNTS_ORDERING_READ] })).toBe(false);
});
