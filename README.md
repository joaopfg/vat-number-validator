# VAT Number Validator 🔍🔍🔍

[![npm version](https://img.shields.io/npm/v/vat-number-validator.svg?style=flat-square)](https://www.npmjs.com/package/vat-number-validator)
[![build](https://img.shields.io/github/actions/workflow/status/joaopfg/vat-number-validator/main.yml?branch=main&style=flat-square&label=build)](https://github.com/joaopfg/vat-number-validator/actions)
[![github](https://flat.badgen.net/badge/icon/github?icon=github&label)](https://github.com/joaopfg/vat-number-validator/)
[![sponsors](https://img.shields.io/github/sponsors/joaopfg?style=flat-square&color=1da1f2)](https://github.com/sponsors/joaopfg/)

- [VAT Number Validator 🔍🔍🔍](#vat-number-validator-)
  - [Why Validating VAT Codes is Important](#why-validating-vat-codes-is-important)
    - [Benefits of Validating VAT Codes](#benefits-of-validating-vat-codes)
  - [Package Completeness ✅](#package-completeness-)
  - [Remaining Development Goals 🛠️](#remaining-development-goals-️)
  - [Legal Notice 📜](#legal-notice-)
  - [Contributing Guidelines 🤝](#contributing-guidelines-)
  - [:toolbox: Functions](#toolbox-functions)
    - [:gear: isValidCountryVat](#gear-isvalidcountryvat)
    - [:gear: isValidVat](#gear-isvalidvat)
    - [:gear: getErrorMessage](#gear-geterrormessage)
  - [:wrench: Constants](#wrench-constants)
    - [:gear: countryRegexMap](#gear-countryregexmap)
    - [:gear: countryErrorMessageMap](#gear-countryerrormessagemap)
    - [:gear: countrySpecialCaseMap](#gear-countryspecialcasemap)
  - [:nut\_and\_bolt: Enum](#nut_and_bolt-enum)
    - [:gear: Country](#gear-country)

## Why Validating VAT Codes is Important

Validating VAT (Value Added Tax) codes is crucial for businesses operating internationally or within countries with complex tax regulations. VAT codes are unique identifiers assigned to businesses for tax purposes. Ensuring the validity of these codes helps businesses avoid errors in invoicing, comply with tax laws, and prevent potential legal issues.

### Benefits of Validating VAT Codes
- Accurate Invoicing: Valid VAT codes ensure accurate invoicing, reducing the risk of financial discrepancies and payment delays.

- Compliance with Tax Laws: Many countries have strict regulations regarding VAT registration and reporting. Validating VAT codes helps businesses comply with these laws and avoid penalties.

- Prevention of Fraud: Invalid VAT codes may indicate fraudulent activities such as tax evasion. Validating VAT codes helps detect and prevent such fraud.

- International Trade: Valid VAT codes are essential for businesses involved in international trade to claim VAT refunds and ensure smooth transactions.

- Trust and Reputation: Ensuring the validity of VAT codes enhances the trust and reputation of businesses, especially when dealing with customers and partners.

## Package Completeness ✅

This TypeScript package provides comprehensive VAT code validation functionality. Unlike similar packages, it offers a more thorough validation process, minimizing false positives and ensuring accurate results.

## Remaining Development Goals 🛠️

While the package is already robust, there are ongoing efforts to enhance its capabilities:

- **Fix False Positives**: Address any false positives in the existing regular expressions to improve accuracy.
- **Exhaustive Unit Tests**: Develop a comprehensive suite of unit tests to thoroughly validate the package's functionality and ensure its reliability.
- **Additional API Functionality**: Expand the package's API to provide more advanced features and options for users.

## Legal Notice 📜

**Note for Users**: This package is distributed under the GNU General Public License Version 3 (GPL-3.0). This license grants users the freedom to use, modify, and distribute the software, with the condition that any derivative works are also licensed under GPL-3.0. It's important to review and understand the terms of this license before using the package in your projects.

## Contributing Guidelines 🤝

**Note for Contributors**: We welcome contributions to improve and enhance this package. If you'd like to contribute, please follow these guidelines:

- Write Unit Tests: Ensure any changes or additions are accompanied by corresponding unit tests to maintain code quality and reliability.
- Development Process: To contribute, open a pull request (PR) targeting the `develop` branch. This allows for collaborative development and ensures that changes are properly reviewed before merging into the main codebase.

## :toolbox: Functions

- [isValidCountryVat](#gear-isvalidcountryvat)
- [isValidVat](#gear-isvalidvat)
- [getErrorMessage](#gear-geterrormessage)

### :gear: isValidCountryVat

| Function | Type |
| ---------- | ---------- |
| `isValidCountryVat` | `(vat: string, country: Country) => boolean` |

### :gear: isValidVat

| Function | Type |
| ---------- | ---------- |
| `isValidVat` | `(vat: string) => boolean` |

### :gear: getErrorMessage

| Function | Type |
| ---------- | ---------- |
| `getErrorMessage` | `(country: Country) => string` |


## :wrench: Constants

- [VAT Number Validator 🔍🔍🔍](#vat-number-validator-)
  - [Why Validating VAT Codes is Important](#why-validating-vat-codes-is-important)
    - [Benefits of Validating VAT Codes](#benefits-of-validating-vat-codes)
  - [Package Completeness ✅](#package-completeness-)
  - [Remaining Development Goals 🛠️](#remaining-development-goals-️)
  - [Legal Notice 📜](#legal-notice-)
  - [Contributing Guidelines 🤝](#contributing-guidelines-)
  - [:toolbox: Functions](#toolbox-functions)
    - [:gear: isValidCountryVat](#gear-isvalidcountryvat)
    - [:gear: isValidVat](#gear-isvalidvat)
    - [:gear: getErrorMessage](#gear-geterrormessage)
  - [:wrench: Constants](#wrench-constants)
    - [:gear: countryRegexMap](#gear-countryregexmap)
    - [:gear: countryErrorMessageMap](#gear-countryerrormessagemap)
    - [:gear: countrySpecialCaseMap](#gear-countryspecialcasemap)
  - [:nut\_and\_bolt: Enum](#nut_and_bolt-enum)
    - [:gear: Country](#gear-country)

### :gear: countryRegexMap

| Constant | Type |
| ---------- | ---------- |
| `countryRegexMap` | `Map<Country, string>` |

### :gear: countryErrorMessageMap

| Constant | Type |
| ---------- | ---------- |
| `countryErrorMessageMap` | `Map<Country, string>` |

### :gear: countrySpecialCaseMap

| Constant | Type |
| ---------- | ---------- |
| `countrySpecialCaseMap` | `Map<Country, (vat: string) => boolean>` |



## :nut_and_bolt: Enum

- [Country](#gear-country)

### :gear: Country



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `Albania` | `'Albania'` |  |
| `Argentina` | `'Argentina'` |  |
| `Australia` | `'Australia'` |  |
| `Austria` | `'Austria'` |  |
| `Belarus` | `'Belarus'` |  |
| `Belgium` | `'Belgium'` |  |
| `Belize` | `'Belize'` |  |
| `Bolivia` | `'Bolivia'` |  |
| `BosniaHerzegovina` | `'Bosnia Herzegovina'` |  |
| `Brazil` | `'Brazil'` |  |
| `Bulgaria` | `'Bulgaria'` |  |
| `Canada` | `'Canada'` |  |
| `Chile` | `'Chile'` |  |
| `China` | `'China'` |  |
| `Colombia` | `'Colombia'` |  |
| `CostaRica` | `'Costa Rica'` |  |
| `Croatia` | `'Croatia'` |  |
| `Cyprus` | `'Cyprus'` |  |
| `CzechRepublic` | `'Czech Republic'` |  |
| `Denmark` | `'Denmark'` |  |
| `DominicanRepublic` | `'Dominican Republic'` |  |
| `Ecuador` | `'Ecuador'` |  |
| `ElSalvador` | `'El Salvador'` |  |
| `Estonia` | `'Estonia'` |  |
| `Finland` | `'Finland'` |  |
| `France` | `'France'` |  |
| `Germany` | `'Germany'` |  |
| `Greece` | `'Greece'` |  |
| `Guatemala` | `'Guatemala'` |  |
| `Hungary` | `'Hungary'` |  |
| `Iceland` | `'Iceland'` |  |
| `India` | `'India'` |  |
| `Indonesia` | `'Indonesia'` |  |
| `Ireland` | `'Ireland'` |  |
| `IsleOfMan` | `'Isle of Man'` |  |
| `Israel` | `'Israel'` |  |
| `Italy` | `'Italy'` |  |
| `Japan` | `'Japan'` |  |
| `Kazakhstan` | `'Kazakhstan'` |  |
| `Latvia` | `'Latvia'` |  |
| `Lithuania` | `'Lithuania'` |  |
| `Luxembourg` | `'Luxembourg'` |  |
| `Malta` | `'Malta'` |  |
| `Mexico` | `'Mexico'` |  |
| `Monaco` | `'Monaco'` |  |
| `Netherlands` | `'Netherlands'` |  |
| `NewZealand` | `'New Zealand'` |  |
| `Nicaragua` | `'Nicaragua'` |  |
| `Nigeria` | `'Nigeria'` |  |
| `NorthMacedonia` | `'North Macedonia'` |  |
| `Norway` | `'Norway'` |  |
| `Paraguay` | `'Paraguay'` |  |
| `Peru` | `'Peru'` |  |
| `Philippines` | `'Philippines'` |  |
| `Poland` | `'Poland'` |  |
| `Portugal` | `'Portugal'` |  |
| `Romania` | `'Romania'` |  |
| `Russia` | `'Russia'` |  |
| `SanMarino` | `'San Marino'` |  |
| `SaudiArabia` | `'Saudi Arabia'` |  |
| `Serbia` | `'Serbia'` |  |
| `Slovakia` | `'Slovakia'` |  |
| `Slovenia` | `'Slovenia'` |  |
| `Spain` | `'Spain'` |  |
| `Sweden` | `'Sweden'` |  |
| `Switzerland` | `'Switzerland'` |  |
| `Taiwan` | `'Taiwan'` |  |
| `Turkey` | `'Turkey'` |  |
| `Ukraine` | `'Ukraine'` |  |
| `UnitedKingdom` | `'United Kingdom'` |  |
| `Uruguay` | `'Uruguay'` |  |
| `Uzbekistan` | `'Uzbekistan'` |  |
| `Venezuela` | `'Venezuela'` |  |

