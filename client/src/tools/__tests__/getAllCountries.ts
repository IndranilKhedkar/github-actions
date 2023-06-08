import { expect, test } from 'vitest';
import { getCountries } from '../getAllCountries';

test('returns expected list of countries', () => {
  expect(getCountries()).toMatchSnapshot();
});
