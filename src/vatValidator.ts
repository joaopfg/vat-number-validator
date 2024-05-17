import { Country } from './country';
import { countryRegexMap } from './countryRegex';
import { countrySpecialCaseMap } from './specialCaseValidator';

export function isValidCountryVat(vat: string, country: Country): boolean {
  if (countrySpecialCaseMap.has(country)) {
    const specialCaseValidator = countrySpecialCaseMap.get(country) as (
      vat: string
    ) => boolean;
    return specialCaseValidator(vat);
  }

  const regex = countryRegexMap.get(country);
  const vatRegex = new RegExp(regex as string);
  return vatRegex.test(vat);
}

export function isValidVat(vat: string): boolean {
  let isValid = false;

  Object.values(Country).forEach((country) => {
    if (isValidCountryVat(vat, country)) {
      isValid = true;
    }
  });

  return isValid;
}
