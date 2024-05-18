import { Country } from './country';

export const countryErrorMessageMap: Map<Country, string> = new Map([
  [
    Country.Albania,
    'Please enter a code that starts with a letter from J to M, followed by 8 digits, and ends with a single uppercase letter. For example, J12345678A or K87654321Z.',
  ],
  [Country.Argentina, 'Please enter an 11-digit number.'],
  [Country.Australia, 'Please enter an 11-digit number.'],
  [
    Country.Austria,
    "Please enter a code that starts with 'ATU' followed by 8 digits (e.g., ATU12345678).",
  ],
  [Country.Belarus, 'Please enter an 9-digit number.'],
  [
    Country.Belgium,
    "Please enter a code that starts with 'BE0' or 'BE1', followed by 8 digits, and ends with either two more digits or a digit followed by 'X' (e.g., BE01234567890, BE11234567891X).",
  ],
  [Country.Belize, 'Please enter an 6-digit number.'],
  [Country.Bolivia, 'Please enter an 7-digit number.'],
  [
    Country.BosniaHerzegovina,
    'Please enter a code that consists of 12 or 13 digits',
  ],
  [
    Country.Brazil,
    'Please enter a code that consists of either 11 digits or 14 digits.',
  ],
  [
    Country.Bulgaria,
    "Please enter a code that starts with 'BG' followed by 9 or 10 digits.",
  ],
  [Country.Canada, 'Please enter an 9-digit number.'],
  [
    Country.Chile,
    "Please enter a code that consists of 8 digits followed by a hyphen and ending with either a digit from 0 to 9 or the letter 'K'.",
  ],
  [
    Country.China,
    'Please enter a code that consists of exactly 18 characters, which can be any combination of uppercase letters, lowercase letters, or digits.',
  ],
  [
    Country.Colombia,
    'Please enter a code that consists of 9 digits followed by a hyphen and ending with a digit from 0 to 9.',
  ],
  [Country.CostaRica, 'Please enter a code that consists of 9 to 12 digits.'],
  [
    Country.Croatia,
    "Please enter a code that starts with 'HR' followed by 11 digits.",
  ],
  [
    Country.Cyprus,
    "Please enter a code that starts with 'CY' followed by 8 digits and ends with a single uppercase letter.",
  ],
  [
    Country.CzechRepublic,
    "Please enter a code that starts with 'CZ' followed by 8 to 10 digits.",
  ],
  [
    Country.Denmark,
    "Please enter a code that starts with 'DK' followed by 8 digits.",
  ],
  [
    Country.DominicanRepublic,
    'Please enter a code that starts with either 1, 4, or 5 followed by 8 digits.',
  ],
  [Country.Ecuador, 'Please enter an 13-digit number.'],
  [
    Country.ElSalvador,
    'Please enter a code that follows the format XXXX-XXXXXX-XXX-X, where X represents a digit.',
  ],
  [
    Country.Estonia,
    "Please enter a code that starts with 'EE' followed by 9 digits.",
  ],
  [
    Country.Finland,
    "Please enter a code that starts with 'FI' followed by 7 digits.",
  ],
  [
    Country.France,
    "Please enter a code that starts with 'FR' followed by 11 digits.",
  ],
  [
    Country.Germany,
    "Please enter a code that starts with 'DE' followed by 9 digits.",
  ],
  [
    Country.Greece,
    "Please enter a code that starts with 'EL' followed by 9 digits.",
  ],
  [
    Country.Guatemala,
    'Please enter a code that consists of 7 digits followed by a hyphen and ending with a single digit.',
  ],
  [
    Country.Hungary,
    "Please enter a code that starts with 'HU' followed by 8 digits.",
  ],
  [Country.Iceland, 'Please enter a code that consists of 5 or 6 digits.'],
  [
    Country.India,
    'Please enter a code that consists of exactly 15 characters, which can be any combination of uppercase letters, lowercase letters, or digits.',
  ],
  [Country.Indonesia, 'Please enter a code that consists of 15 or 16 digits.'],
  [
    Country.Ireland,
    "Please enter a code that starts with 'IE' followed by either 7 digits and a single uppercase letter, or 7 digits followed by 2 uppercase letters.",
  ],
  [
    Country.IsleOfMan,
    "Please enter a code that starts with 'GB' followed by one of the following formats: Three groups of 3, 4, and 2 digits separated by spaces; Nine digits; Nine digits followed by three digits separated by a space; Codes starting with 'GD' followed by a number between 0 and 499; Codes starting with 'HA' followed by a number between 500 and 999.",
  ],
  [Country.Israel, 'Please enter an 9-digit number.'],
  [
    Country.Italy,
    "Please enter a code that starts with 'IT' followed by 11 digits.",
  ],
  [Country.Japan, 'Please enter an 13-digit number.'],
  [Country.Kazakhstan, 'Please enter an 12-digit number.'],
  [
    Country.Latvia,
    "Please enter a code that starts with 'LV' followed by 11 digits.",
  ],
  [
    Country.Lithuania,
    "Please enter a code that starts with 'LT' followed by 9 or 12 digits.",
  ],
  [
    Country.Luxembourg,
    "Please enter a code that starts with 'LU' followed by 8 digits.",
  ],
  [
    Country.Malta,
    "Please enter a code that starts with 'MT' followed by 8 digits.",
  ],
  [
    Country.Mexico,
    "Please enter a code that starts with 3 or 4 uppercase letters (including 'Ñ' and '&'), followed by 6 digits, and ending with 3 alphanumeric characters.",
  ],
  [
    Country.Monaco,
    "Please enter a code that starts with 'FR' followed by 11 digits.",
  ],
  [
    Country.Netherlands,
    "Please enter a code that starts with 'NL' followed by 9 digits, the letter 'B', and 2 more digits.",
  ],
  [Country.NewZealand, 'Please enter a code that consists of 8 or 9 digits.'],
  [
    Country.Nicaragua,
    'Please enter a code in the format XXX-XXXXXX-XXXXA, where X is a digit and A is a letter.',
  ],
  [
    Country.Nigeria,
    'Please enter a code that consists of 8 digits, a hyphen, and 4 more digits.',
  ],
  [
    Country.NorthMacedonia,
    "Please enter a code that starts with 'MK' followed by 13 digits.",
  ],
  [Country.Norway, 'Please enter an 9-digit number.'],
  [
    Country.Paraguay,
    'Please enter a code that consists of 6 to 8 digits followed by a hyphen and ending with a single digit.',
  ],
  [Country.Peru, 'Please enter an 11-digit number.'],
  [Country.Philippines, 'Please enter an 12-digit number.'],
  [
    Country.Poland,
    "Please enter a code that starts with 'PL' and follows one of these formats: XXX-XXX-XX-XX, XXX-XX-XX-XXX, XXXXXXXXXX (10 digits).",
  ],
  [
    Country.Portugal,
    "Please enter a code that starts with 'PT' followed by 9 digits.",
  ],
  [
    Country.Romania,
    "Please enter a code that starts with 'RO' followed by 2 to 10 digits.",
  ],
  [Country.Russia, 'Please enter a code that consists of 10 or 12 digits.'],
  [Country.SanMarino, 'Please enter an 5-digit number.'],
  [Country.SaudiArabia, 'Please enter an 15-digit number.'],
  [Country.Serbia, 'Please enter an 9-digit number.'],
  [
    Country.Slovakia,
    "Please enter a code that starts with 'SK' followed by 10 digits.",
  ],
  [
    Country.Slovenia,
    "Please enter a code that starts with 'SI' followed by 8 digits.",
  ],
  [
    Country.Spain,
    "Please enter a code that starts with 'ES', followed by an uppercase letter, 7 digits, and ends with an uppercase letter or a digit.",
  ],
  [
    Country.Sweden,
    "Please enter a code that starts with 'SE' followed by 12 digits.",
  ],
  [
    Country.Switzerland,
    "Please enter a code that follows the format 'CHE-XXX.XXX.XXX MWST/TVA/IVA', where X is a digit.",
  ],
  [Country.Taiwan, 'Please enter an 8-digit number.'],
  [Country.Turkey, 'Please enter an 10-digit number.'],
  [Country.Ukraine, 'Please enter an 12-digit number.'],
  [
    Country.UnitedKingdom,
    "Please enter a code that starts with 'GB' followed by one of the following formats: Three groups of 3, 4, and 2 digits separated by spaces; Nine digits; Nine digits followed by three digits separated by a space; Codes starting with 'GD' followed by a number between 0 and 499; Codes starting with 'HA' followed by a number between 500 and 999.",
  ],
  [
    Country.Uruguay,
    "Please enter a code that consists of 8 digits, followed by '001', and ending with a single digit.",
  ],
  [
    Country.Uzbekistan,
    'Please enter a code that starts with 2, 4, 5, 6, or 7 followed by 8 digits.',
  ],
  [
    Country.Venezuela,
    "Please enter a code that starts with 'J', 'G', 'V', or 'E' followed by a hyphen and 9 digits.",
  ],
]);
