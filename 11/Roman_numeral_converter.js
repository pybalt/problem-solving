"use strict";
const ARABIC = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
};
const ARABIC_KEYS = Object
    .keys(ARABIC)
    .map(el => parseInt(el)).reverse();
function divisorParser(divisor, rest) {
    let result = [];
    let times = Math.floor(rest / divisor);
    result = [...`${divisor} `.repeat(times).trim().split(' ').map(el => parseInt(el))];
    return result;
}
function divide(num) {
    let result = [];
    let keys = ARABIC_KEYS
        .filter((element) => element <= num);
    let rest = num;
    for (const divisor of keys) {
        if (rest < divisor) {
            continue;
        }
        result.push(...divisorParser(divisor, rest));
        rest -= Math.floor(rest / divisor) * divisor;
    }
    return result;
}
function convertToRoman(num) {
    // This only works until number 3999
    let divisors = divide(num);
    divisors = divisors.filter(el => el !== undefined);
    let result = divisors.map(el => ARABIC[el] ?? '');
    result = result.filter(el => el != '');
    return result.join('');
}
console.log(convertToRoman(3999));
module.exports = convertToRoman;
// forloop 26 ms to convert 1000+3999 numbers to roman. :) 
