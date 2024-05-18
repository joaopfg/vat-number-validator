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

- [countryRegexMap](#gear-countryregexmap)
- [countryErrorMessageMap](#gear-countryerrormessagemap)
- [countrySpecialCaseMap](#gear-countryspecialcasemap)

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

