import { Country } from './country';
import { countryRegexMap } from "./countryRegex";

function validateFrenchVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.France);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const validationKey = Number(vat.substring(2, 4));
    const siren = vat.substring(4);
    const calculatedKey = (12 + 3 * (Number(siren) % 97)) % 97;

    return validationKey === calculatedKey;
}

function validateItalianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Italy);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digits = vat.substring(2).split('').map(Number);

    digits.reverse();

    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];

        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

function validateSlovakianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Slovakia);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const num = BigInt(vat.substring(2));

    return num % BigInt(11) === BigInt(0);
}

function validateAustralianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Australia);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const identifier = vat.substring(0, 9);
    const checkDigits = vat.substring(9);
    let total = 0;

    for (let i = 0; i < identifier.length; i++) {
        const digit = parseInt(identifier[i]);
        total = (total * 10 + digit) % 89;
    }

    const calculatedCheckDigits = total.toString().padStart(2, '0');

    return calculatedCheckDigits === checkDigits;
}

function validateIsraeliVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Israel);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digits = vat.split('').map(Number);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        let digit = digits[i];

        if (i % 2 === 1) {
            digit *= 2;

            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

function validateNorwegianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Norway);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digits = vat.split('').map(Number);
    let sum = 0;

    for (let i = 0; i < 8; i++) {
        sum += digits[i] * [3, 2, 7, 6, 5, 4, 3, 2][i];
    }

    const remainder = sum % 11;
    const checkDigit = remainder <= 1 ? 0 : 11 - remainder;

    return checkDigit === digits[8];
}

function validateFilipinoVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Philippines);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const sequentialDigits = vat.substring(1, 8);

    for (let i = 1; i < 7; i++) {
        if (parseInt(sequentialDigits[i]) !== parseInt(sequentialDigits[i - 1]) + 1) {
            return false;
        }
    }

    return true;
}

function validateSerbianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Serbia);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digits = vat.split('').map(Number);
    let sum = 10;

    for (let i = 0; i < 8; i++) {
        sum += digits[i];
        sum %= 10;

        if (sum === 0) {
            sum = 10;
        }

        sum *= 2;
        sum %= 11;
    }

    const expectedChecksum = (11 - sum) % 10;

    return expectedChecksum === digits[8];
}

function validateSwissVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Switzerland);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digits = vat.substring(0, 8).split('').map(Number);
    let weightedSum = 0;

    for (let i = 0; i < 8; i++) {
        weightedSum += digits[i] * [5, 4, 3, 2, 7, 6, 5, 4][i];
    }

    const remainder = weightedSum % 11;
    const checksum = remainder <= 1 ? 0 : 11 - remainder;
    const vatChecksum = parseInt(vat.charAt(8));

    return checksum === vatChecksum;
}

function validateTaiwaneseVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Taiwan);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digits = vat.split('').map(Number);
    const weights = [1, 2, 1, 2, 1, 2, 4, 1];
    let sum = 0;

    for (let i = 0; i < 8; i++) {
        const product = digits[i] * weights[i];
        if (product >= 10) {
            sum += Math.floor(product / 10) + (product % 10);
        } else {
            sum += product;
        }
    }

    return sum % 10 === 0;
}

function validateBrazilianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Brazil);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    if (vat.length === 14) {
        const weightsFirstDigit = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const weightsSecondDigit = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;

        for (let i = 0; i < 12; i++) {
            sum += parseInt(vat.charAt(i)) * weightsFirstDigit[i];
        }

        let remainder = sum % 11;
        const firstCheckDigit = remainder <= 1 ? 0 : 11 - remainder;

        if (parseInt(vat.charAt(12)) !== firstCheckDigit) {
            return false;
        }

        sum = 0;

        for (let i = 0; i < 13; i++) {
            sum += parseInt(vat.charAt(i)) * weightsSecondDigit[i];
        }

        remainder = sum % 11;
        const secondCheckDigit = remainder <= 1 ? 0 : 11 - remainder;

        return parseInt(vat.charAt(13)) === secondCheckDigit;
    }

    if (vat.length === 11) {
        const weightsFirstDigit = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const weightsSecondDigit = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += parseInt(vat.charAt(i)) * weightsFirstDigit[i];
        }

        let remainder = sum % 11;
        const firstCheckDigit = remainder <= 1 ? 0 : 11 - remainder;

        if (parseInt(vat.charAt(9)) !== firstCheckDigit) {
            return false;
        }

        sum = 0;

        for (let i = 0; i < 10; i++) {
            sum += parseInt(vat.charAt(i)) * weightsSecondDigit[i];
        }

        remainder = sum % 11;
        const secondCheckDigit = remainder <= 1 ? 0 : 11 - remainder;

        return parseInt(vat.charAt(10)) === secondCheckDigit;
    }

    return false;
}

function validateChileanVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Chile);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const checkDigit = vat.charAt(9);
    const digits = vat.slice(0, 8);

    const weights = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i)) * weights[i];
    }

    const remainder = sum % 11;
    const calculatedCheckDigit = 11 - remainder;

    if (calculatedCheckDigit === 11) {
        return checkDigit === '0';
    } else if (calculatedCheckDigit === 10) {
        return checkDigit === 'K';
    } else {
        return parseInt(checkDigit) === calculatedCheckDigit;
    }
}

function validateColombianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Colombia);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const checkDigit = vat.charAt(10);
    const digits = vat.slice(0, 9);

    const weights = [41, 37, 29, 23, 19, 17, 13, 7, 3];
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i)) * weights[i];
    }

    const remainder = sum % 11;
    const calculatedCheckDigit = (remainder == 0 || remainder == 1) ? remainder : 11 - remainder;
    return parseInt(checkDigit) === calculatedCheckDigit;
}

function validateDominicanRepublicVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.DominicanRepublic);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const checkDigit = vat.charAt(10);
    const digits = vat.slice(0, 9);

    const weights = [7, 9, 8, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i)) * weights[i];
    }

    const remainder = sum % 11;
    const calculatedCheckDigit = (10 - remainder) % 9 + 1;
    return parseInt(checkDigit) === calculatedCheckDigit;
}

function validateParaguayVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Paraguay);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const digitsOnly = vat.replace(/\D/g, '');
    const checkDigit = digitsOnly.charAt(digitsOnly.length - 1);
    const digits = digitsOnly.slice(0, -1);
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += (i + 2) * parseInt(digits.charAt(digits.length - i - 1));
    }

    const calculatedCheckDigit = String((-sum % 11) % 10);

    return checkDigit === calculatedCheckDigit;
}

function validatePeruvianVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Peru);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const number = vat.slice(0, 10);
    const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    const weightedSum = weights.reduce((sum, weight, index) => {
        const digit = parseInt(number.charAt(index));
        return sum + weight * digit;
    }, 0);
    const checkDigit = (11 - (weightedSum % 11)) % 10;
    const calculatedCheckDigit = String(checkDigit);
    const providedCheckDigit = vat.charAt(10);

    return calculatedCheckDigit === providedCheckDigit;
}

function validateUruguayanVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Uruguay);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const number = vat.slice(0, 11);
    const weights = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const total = weights.reduce((sum, weight, index) => {
        const digit = parseInt(number.charAt(index));
        return sum + digit * weight;
    }, 0);
    const calculatedCheckDigit = (-total % 11).toString();
    const providedCheckDigit = vat.charAt(11);

    return calculatedCheckDigit === providedCheckDigit;
}

function validateVenezuelanVat(vat: string): boolean {
    const regex = countryRegexMap.get(Country.Venezuela);
    const vatRegex = new RegExp(regex as string);

    if (!vatRegex.test(vat)) {
        return false;
    }

    const number = vat.slice(0, 10).replace(/[-\s]/g, '');
    const weights = [3, 2, 7, 6, 5, 4, 3, 2];
    const _companyTypes: { [key: string]: number } = {
        'V': 4,   // natural person born in Venezuela
        'E': 8,   // foreign natural person
        'J': 12,  // company
        'P': 16,  // passport
        'G': 20,  // government
    };
    const companyType = _companyTypes[number[0]];
    let sum = companyType;
    for (let i = 0; i < 8; i++) {
        sum += weights[i] * parseInt(number.charAt(i + 1));
    }

    const calculatedCheckDigit = '00987654321'[(sum % 11)];
    const providedCheckDigit = vat.charAt(10);

    return calculatedCheckDigit === providedCheckDigit;
}

export const countrySpecialCaseMap: Map<Country, (vat: string) => boolean> = new Map([
    [Country.France, validateFrenchVat],
    [Country.Italy, validateItalianVat],
    [Country.Slovakia, validateSlovakianVat],
    [Country.Australia, validateAustralianVat],
    [Country.Israel, validateIsraeliVat],
    [Country.Monaco, validateFrenchVat],
    [Country.Norway, validateNorwegianVat],
    [Country.Philippines, validateFilipinoVat],
    [Country.Serbia, validateSerbianVat],
    [Country.Switzerland, validateSwissVat],
    [Country.Taiwan, validateTaiwaneseVat],
    [Country.Brazil, validateBrazilianVat],
    [Country.Chile, validateChileanVat],
    [Country.Colombia, validateColombianVat],
    [Country.DominicanRepublic, validateDominicanRepublicVat],
    [Country.Paraguay, validateParaguayVat],
    [Country.Peru, validatePeruvianVat],
    [Country.Uruguay, validateUruguayanVat],
    [Country.Venezuela, validateVenezuelanVat],
]);
