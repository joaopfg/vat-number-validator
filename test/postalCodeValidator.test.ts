import { isValidCountryVat, isValidVat } from '../src/vatValidator';
import {
  validVats,
  invalidVats,
  validVatsArray,
  invalidVatsArray,
} from './utils';

describe('isValidCountryVat', () => {
  test.each(validVats)(
    'returns true for valid VAT number in specified country',
    (entry) => {
      const result = isValidCountryVat(entry.vat, entry.country);
      expect(result).toBe(true);
    }
  );

  test.each(invalidVats)(
    'returns false for invalid VAT number in specified country',
    (entry) => {
      const result = isValidCountryVat(entry.vat, entry.country);
      expect(result).toBe(false);
    }
  );
});

describe('isValidVat', () => {
  test.each(validVatsArray)('should return true for %s', (vat) => {
    const result = isValidVat(vat);
    expect(result).toBe(true);
  });

  test.each(invalidVatsArray)('should return false for %s', (vat) => {
    const result = isValidVat(vat);
    expect(result).toBe(false);
  });
});
