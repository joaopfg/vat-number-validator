import { Country } from '../src/country';

export const validVats: { country: Country; vat: string }[] = [
  { vat: 'IT12345678901', country: Country.Italy },
  { vat: 'NL999999999B01', country: Country.Netherlands },
  { vat: 'PL9999999999', country: Country.Poland },
  { vat: 'PL999-999-99-99', country: Country.Poland },
  { vat: 'PL999-99-99-999', country: Country.Poland },
  { vat: 'SK1234567890', country: Country.Slovakia },
  { vat: 'SI99999999', country: Country.Slovenia },
  { vat: 'ESX99999999', country: Country.Spain },
  { vat: 'ESX9999999R', country: Country.Spain },
  { vat: 'SE999999999901', country: Country.Sweden },
  { vat: 'K99999999L', country: Country.Albania },
  { vat: 'L99999999G', country: Country.Albania },
  { vat: '12345678901', country: Country.Australia },
  { vat: '123456789', country: Country.Canada },
  { vat: '91310000717860841G', country: Country.China },
  { vat: '123456', country: Country.Iceland },
  { vat: '22AAAAA0000A1Z5', country: Country.India },
  { vat: '022718241413000', country: Country.Indonesia },
  { vat: '514646454', country: Country.Israel },
  { vat: '99999999', country: Country.NewZealand },
  { vat: '999999999', country: Country.NewZealand },
  { vat: '01012345-0001', country: Country.Nigeria },
  { vat: 'MK4032013544513', country: Country.NorthMacedonia },
  { vat: '123456785', country: Country.Norway },
  { vat: '123456789012', country: Country.Philippines },
  { vat: '123456788', country: Country.Serbia },
  { vat: '04595257', country: Country.Taiwan },
  { vat: 'GB999 9999 73', country: Country.UnitedKingdom },
  { vat: 'GB999999973 999', country: Country.UnitedKingdom },
  { vat: 'GBGD001', country: Country.UnitedKingdom },
  { vat: 'GBHA599', country: Country.UnitedKingdom },
  { vat: 'GB009 9999 73', country: Country.IsleOfMan },
  { vat: 'GB009999973 999', country: Country.IsleOfMan },
  { vat: 'GBGD001', country: Country.IsleOfMan },
  { vat: 'GBHA599', country: Country.IsleOfMan },
  { vat: '200000001', country: Country.Uzbekistan },
  { vat: '799999999', country: Country.Uzbekistan },
  { vat: '82304249000155', country: Country.Brazil },
  { vat: '23500580009', country: Country.Brazil },
  { vat: '18609823-4', country: Country.Chile },
  { vat: '12391279-9', country: Country.Chile },
];

export const invalidVats: { country: Country; vat: string }[] = [
  { vat: '12345', country: Country.Albania },
];

export const validVatsArray = [
  '22150',
];

export const invalidVatsArray = [
  'abcdef',
];
