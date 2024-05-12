# Postal Code Validator 📮

[![npm version](https://img.shields.io/npm/v/postal-code-validator.svg?style=flat-square)](https://www.npmjs.com/package/postal-code-validator)
[![build](https://img.shields.io/github/actions/workflow/status/joaopfg/postal-code-validator/main.yml?branch=main&style=flat-square&label=build)](https://github.com/joaopfg/postal-code-validator/actions)
[![github](https://flat.badgen.net/badge/icon/github?icon=github&label)](https://github.com/joaopfg/postal-code-validator/)
[![sponsors](https://img.shields.io/github/sponsors/joaopfg?style=flat-square&color=1da1f2)](https://github.com/sponsors/joaopfg/)

- [Postal Code Validator 📮](#postal-code-validator-)
  - [Why Validating Postal Codes is Important](#why-validating-postal-codes-is-important)
  - [Package Completeness ✅](#package-completeness-)
  - [Remaining Development Goals 🛠️](#remaining-development-goals-️)
  - [Legal Notice 📜](#legal-notice-)
  - [Contributing Guidelines 🤝](#contributing-guidelines-)
  - [:toolbox: Functions](#toolbox-functions)
    - [:gear: countryHasPostalCodeSystem](#gear-countryhaspostalcodesystem)
    - [:gear: isValidCountryPostalCode](#gear-isvalidcountrypostalcode)
    - [:gear: isValidPostalCode](#gear-isvalidpostalcode)
  - [:wrench: Constants](#wrench-constants)
    - [:gear: countryRegexMap](#gear-countryregexmap)
  - [:nut\_and\_bolt: Enum](#nut_and_bolt-enum)
    - [:gear: Country](#gear-country)

## Why Validating Postal Codes is Important

Validating postal codes is crucial for ensuring accurate data in applications that rely on location-based services. Incorrect or improperly formatted postal codes can lead to errors in shipping, geolocation, and data analysis. By validating postal codes, you can improve the reliability and efficiency of your application.

## Package Completeness ✅

This TypeScript package provides comprehensive postal code validation functionality. Unlike similar packages, it offers a more thorough validation process, minimizing false positives and ensuring accurate results.

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

### :gear: countryHasPostalCodeSystem

| Function | Type |
| ---------- | ---------- |
| `countryHasPostalCodeSystem` | `(country: Country) => boolean` |

### :gear: isValidCountryPostalCode

| Function | Type |
| ---------- | ---------- |
| `isValidCountryPostalCode` | `(postalCode: string, country: Country) => boolean` |

### :gear: isValidPostalCode

| Function | Type |
| ---------- | ---------- |
| `isValidPostalCode` | `(postalCode: string) => boolean` |


## :wrench: Constants

- [countryRegexMap](#gear-countryregexmap)

### :gear: countryRegexMap

| Constant | Type |
| ---------- | ---------- |
| `countryRegexMap` | `Map<Country, string>` |



## :nut_and_bolt: Enum

- [Country](#gear-country)

### :gear: Country



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `Afghanistan` | `'Afghanistan'` |  |
| `AlandIslands` | `'Åland Islands'` |  |
| `Albania` | `'Albania'` |  |
| `Algeria` | `'Algeria'` |  |
| `AmericanSamoa` | `'American Samoa'` |  |
| `Andorra` | `'Andorra'` |  |
| `Angola` | `'Angola'` |  |
| `Anguilla` | `'Anguilla'` |  |
| `AntiguaAndBarbuda` | `'Antigua and Barbuda'` |  |
| `Argentina` | `'Argentina'` |  |
| `Armenia` | `'Armenia'` |  |
| `Aruba` | `'Aruba'` |  |
| `AscensionIsland` | `'Ascension Island'` |  |
| `Australia` | `'Australia'` |  |
| `Austria` | `'Austria'` |  |
| `Azerbaijan` | `'Azerbaijan'` |  |
| `Bahamas` | `'Bahamas'` |  |
| `Bahrain` | `'Bahrain'` |  |
| `Bangladesh` | `'Bangladesh'` |  |
| `Barbados` | `'Barbados'` |  |
| `Belarus` | `'Belarus'` |  |
| `Belgium` | `'Belgium'` |  |
| `Belize` | `'Belize'` |  |
| `Benin` | `'Benin'` |  |
| `Bermuda` | `'Bermuda'` |  |
| `Bhutan` | `'Bhutan'` |  |
| `Bolivia` | `'Bolivia'` |  |
| `Bonaire` | `'Bonaire'` |  |
| `BosniaHerzegovina` | `'Bosnia-Herzegovina'` |  |
| `Botswana` | `'Botswana'` |  |
| `BouvetIsland` | `'Bouvet Island'` |  |
| `Brazil` | `'Brazil'` |  |
| `BritishAntarcticTerritory` | `'British Antarctic Territory'` |  |
| `BritishIndianOceanTerritory` | `'British Indian Ocean Territory'` |  |
| `BritishVirginIslands` | `'British Virgin Islands'` |  |
| `BruneiDarussalam` | `'Brunei Darussalam'` |  |
| `Bulgaria` | `'Bulgaria'` |  |
| `BurkinaFaso` | `'Burkina Faso'` |  |
| `Burundi` | `'Burundi'` |  |
| `Cambodia` | `'Cambodia'` |  |
| `Cameroon` | `'Cameroon'` |  |
| `Canada` | `'Canada'` |  |
| `CapeVerde` | `'Cape Verde'` |  |
| `CaymanIslands` | `'Cayman Islands'` |  |
| `CentralAfricanRepublic` | `'Central African Republic'` |  |
| `Chad` | `'Chad'` |  |
| `Chile` | `'Chile'` |  |
| `China` | `'China'` |  |
| `ChristmasIsland` | `'Christmas Island'` |  |
| `CocosKeelingIslands` | `'Cocos (Keeling) Islands'` |  |
| `Colombia` | `'Colombia'` |  |
| `Comoros` | `'Comoros'` |  |
| `CongoDemocraticRepublicOfKinshasa` | `'Congo (Democratic Republic of - Kinshasa)'` |  |
| `CongoRepublicOfBrazzaville` | `'Congo (Republic of - Brazzaville)'` |  |
| `CookIslands` | `'Cook Islands'` |  |
| `CostaRica` | `'Costa Rica'` |  |
| `Croatia` | `'Croatia'` |  |
| `Cuba` | `'Cuba'` |  |
| `Curacao` | `'Curaçao'` |  |
| `Cyprus` | `'Cyprus'` |  |
| `CzechRepublic` | `'Czechia / Czech Republic'` |  |
| `Denmark` | `'Denmark'` |  |
| `Djibouti` | `'Djibouti'` |  |
| `Dominica` | `'Dominica'` |  |
| `DominicanRepublic` | `'Dominican Republic'` |  |
| `EastTimor` | `'East Timor'` |  |
| `Ecuador` | `'Ecuador'` |  |
| `Egypt` | `'Egypt'` |  |
| `ElSalvador` | `'El Salvador'` |  |
| `EquatorialGuinea` | `'Equatorial Guinea'` |  |
| `Eritrea` | `'Eritrea'` |  |
| `Estonia` | `'Estonia'` |  |
| `Ethiopia` | `'Ethiopia'` |  |
| `FalklandIslands` | `'Falkland Islands'` |  |
| `FaroeIslands` | `'Faeroe Islands / Faroe Islands'` |  |
| `Fiji` | `'Fiji'` |  |
| `Finland` | `'Finland'` |  |
| `France` | `'France'` |  |
| `FrenchGuiana` | `'French Guiana'` |  |
| `FrenchPolynesia` | `'French Polynesia'` |  |
| `FrenchSouthernTerritories` | `'French Southern Territories'` |  |
| `Gabon` | `'Gabon'` |  |
| `Gambia` | `'Gambia'` |  |
| `Georgia` | `'Georgia'` |  |
| `Germany` | `'Germany'` |  |
| `Ghana` | `'Ghana'` |  |
| `Gibraltar` | `'Gibraltar'` |  |
| `Greece` | `'Greece'` |  |
| `Greenland` | `'Greenland'` |  |
| `Grenada` | `'Grenada'` |  |
| `Guadeloupe` | `'Guadeloupe'` |  |
| `Guam` | `'Guam'` |  |
| `Guatemala` | `'Guatemala'` |  |
| `Guernsey` | `'Guernsey'` |  |
| `Guinea` | `'Guinea'` |  |
| `GuineaBissau` | `'Guinea-Bissau'` |  |
| `Guyana` | `'Guyana'` |  |
| `Haiti` | `'Haiti'` |  |
| `HeardAndMcDonaldIslands` | `'Heard and McDonald Islands'` |  |
| `HolySee` | `'Holy See'` |  |
| `Honduras` | `'Honduras'` |  |
| `HongKong` | `'Hong Kong'` |  |
| `Hungary` | `'Hungary'` |  |
| `Iceland` | `'Iceland'` |  |
| `India` | `'India'` |  |
| `Indonesia` | `'Indonesia'` |  |
| `Iran` | `'Iran'` |  |
| `Iraq` | `'Iraq'` |  |
| `Ireland` | `'Ireland'` |  |
| `IsleOfMan` | `'Isle of Man'` |  |
| `Israel` | `'Israel'` |  |
| `Italy` | `'Italy'` |  |
| `IvoryCoast` | `'Ivory Coast'` |  |
| `Jamaica` | `'Jamaica'` |  |
| `Japan` | `'Japan'` |  |
| `Jersey` | `'Jersey'` |  |
| `Jordan` | `'Jordan'` |  |
| `KazakhstanNewCode` | `'Kazakhstan New code'` |  |
| `KazakhstanOldCode` | `'Kazakhstan Old code'` |  |
| `Kenya` | `'Kenya'` |  |
| `Kiribati` | `'Kiribati'` |  |
| `Kosovo` | `'Kosovo'` |  |
| `Kuwait` | `'Kuwait'` |  |
| `Kyrgyzstan` | `'Kyrgyzstan'` |  |
| `Laos` | `'Laos'` |  |
| `Latvia` | `'Latvia'` |  |
| `Lebanon` | `'Lebanon'` |  |
| `Lesotho` | `'Lesotho'` |  |
| `Liberia` | `'Liberia'` |  |
| `Libya` | `'Libya'` |  |
| `Liechtenstein` | `'Liechtenstein'` |  |
| `Lithuania` | `'Lithuania'` |  |
| `Luxembourg` | `'Luxembourg'` |  |
| `Macao` | `'Macao'` |  |
| `Madagascar` | `'Madagascar'` |  |
| `Malawi` | `'Malawi'` |  |
| `Malaysia` | `'Malaysia'` |  |
| `Maldives` | `'Maldives'` |  |
| `Mali` | `'Mali'` |  |
| `Malta` | `'Malta'` |  |
| `MarshallIslands` | `'Marshall Islands'` |  |
| `Martinique` | `'Martinique'` |  |
| `Mauritania` | `'Mauritania'` |  |
| `Mauritius` | `'Mauritius'` |  |
| `Mayotte` | `'Mayotte'` |  |
| `Mexico` | `'Mexico'` |  |
| `Micronesia` | `'Micronesia'` |  |
| `Moldova` | `'Moldova'` |  |
| `Monaco` | `'Monaco'` |  |
| `Mongolia` | `'Mongolia'` |  |
| `Montenegro` | `'Montenegro'` |  |
| `Montserrat` | `'Montserrat'` |  |
| `Morocco` | `'Morocco'` |  |
| `Mozambique` | `'Mozambique'` |  |
| `Myanmar` | `'Myanmar'` |  |
| `Namibia` | `'Namibia'` |  |
| `Nauru` | `'Nauru'` |  |
| `Nepal` | `'Nepal'` |  |
| `Netherlands` | `'Netherlands'` |  |
| `NewCaledonia` | `'New Caledonia'` |  |
| `NewZealand` | `'New Zealand'` |  |
| `Nicaragua` | `'Nicaragua'` |  |
| `Niger` | `'Niger'` |  |
| `Nigeria` | `'Nigeria'` |  |
| `Niue` | `'Niue'` |  |
| `NorfolkIsland` | `'Norfolk Island'` |  |
| `NorthKorea` | `'North Korea'` |  |
| `NorthMacedonia` | `'North Macedonia'` |  |
| `NorthernCyprus` | `'Northern Cyprus'` |  |
| `NorthernMarianaIslands` | `'Northern Mariana Islands'` |  |
| `Norway` | `'Norway'` |  |
| `Oman` | `'Oman'` |  |
| `Pakistan` | `'Pakistan'` |  |
| `Palau` | `'Palau'` |  |
| `PalestinianAuthority` | `'Palestinian Authority'` |  |
| `Panama` | `'Panama'` |  |
| `PapuaNewGuinea` | `'Papua New Guinea'` |  |
| `Paraguay` | `'Paraguay'` |  |
| `Peru` | `'Peru'` |  |
| `Philippines` | `'Philippines'` |  |
| `PitcairnIslands` | `'Pitcairn Islands'` |  |
| `Poland` | `'Poland'` |  |
| `Portugal` | `'Portugal'` |  |
| `PuertoRico` | `'Puerto Rico'` |  |
| `Qatar` | `'Qatar'` |  |
| `Reunion` | `'Reunion'` |  |
| `Romania` | `'Romania'` |  |
| `Russia` | `'Russia'` |  |
| `Rwanda` | `'Rwanda'` |  |
| `Saba` | `'Saba'` |  |
| `SaintBarthelemy` | `'Saint-Barthélemy'` |  |
| `SaintHelena` | `'Saint Helena'` |  |
| `SaintKittsAndNevis` | `'Saint Kitts and Nevis'` |  |
| `SaintLucia` | `'Saint Lucia'` |  |
| `SaintMartin` | `'Saint-Martin'` |  |
| `SaintPierreAndMiquelon` | `'Saint Pierre and Miquelon'` |  |
| `SaintVincentAndTheGrenadines` | `'Saint Vincent and the Grenadines'` |  |
| `Samoa` | `'Samoa'` |  |
| `SanMarino` | `'San Marino'` |  |
| `SaoTomeAndPrincipe` | `'Sao Tome and Principe'` |  |
| `SaudiArabia` | `'Saudi Arabia'` |  |
| `Senegal` | `'Senegal'` |  |
| `Serbia` | `'Serbia (PAK)'` |  |
| `SerbiaOldSystem` | `'Serbia (old system)'` |  |
| `Seychelles` | `'Seychelles'` |  |
| `SierraLeone` | `'Sierra Leone'` |  |
| `Singapore` | `'Singapore'` |  |
| `SintEustatius` | `'Sint Eustatius'` |  |
| `SintMaarten` | `'Sint Maarten'` |  |
| `Slovakia` | `'Slovakia'` |  |
| `Slovenia` | `'Slovenia'` |  |
| `SolomonIslands` | `'Solomon Islands'` |  |
| `Somalia` | `'Somalia'` |  |
| `SouthAfrica` | `'South Africa'` |  |
| `SouthGeorgiaAndTheSouthSandwichIslands` | `'South Georgia and the South Sandwich Islands'` |  |
| `SouthKorea` | `'South Korea'` |  |
| `SouthSudan` | `'South Sudan'` |  |
| `Spain` | `'Spain'` |  |
| `SriLanka` | `'Sri Lanka'` |  |
| `Sudan` | `'Sudan'` |  |
| `Suriname` | `'Suriname'` |  |
| `SvalbardAndJanMayenIslands` | `'Svalbard and Jan Mayen Islands'` |  |
| `Swaziland` | `'Swaziland'` |  |
| `Sweden` | `'Sweden'` |  |
| `Switzerland` | `'Switzerland'` |  |
| `Syria` | `'Syria'` |  |
| `Taiwan` | `'Taiwan'` |  |
| `Tajikistan` | `'Tajikistan'` |  |
| `Tanzania` | `'Tanzania'` |  |
| `Thailand` | `'Thailand'` |  |
| `Togo` | `'Togo'` |  |
| `Tokelau` | `'Tokelau'` |  |
| `Tonga` | `'Tonga'` |  |
| `TrinidadAndTobago` | `'Trinidad and Tobago'` |  |
| `Tunisia` | `'Tunisia'` |  |
| `Turkey` | `'Turkey'` |  |
| `Turkmenistan` | `'Turkmenistan'` |  |
| `TurksAndCaicosIslands` | `'Turks and Caicos Islands'` |  |
| `Tuvalu` | `'Tuvalu'` |  |
| `Uganda` | `'Uganda'` |  |
| `Ukraine` | `'Ukraine'` |  |
| `UnitedArabEmirates` | `'United Arab Emirates'` |  |
| `UnitedKingdom` | `'United Kingdom'` |  |
| `UnitedStatesMinorOutlyingIslands` | `'United States Minor Outlying Islands'` |  |
| `UnitedStatesOfAmerica` | `'United States of America'` |  |
| `UnitedStatesVirginIslands` | `'United States Virgin Islands'` |  |
| `Uruguay` | `'Uruguay'` |  |
| `Uzbekistan` | `'Uzbekistan'` |  |
| `Vanuatu` | `'Vanuatu'` |  |
| `Venezuela` | `'Venezuela'` |  |
| `Vietnam` | `'Vietnam'` |  |
| `WallisAndFutuna` | `'Wallis and Futuna'` |  |
| `WesternSahara` | `'Western Sahara'` |  |
| `Yemen` | `'Yemen'` |  |
| `Zambia` | `'Zambia'` |  |
| `Zimbabwe` | `'Zimbabwe'` |  |

