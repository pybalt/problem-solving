"use strict";
/** This characters are not allowed
 * @readonly
 */
const prohibitedAlph = [
    "=",
    "*",
    "%",
    "#",
    "!",
    "@",
    "$",
    "^",
    "&",
    "?"
];
/** Checks if an eleven-length array has the correct format
* @returns *boolean*
*/
function elevenDigitsChecker(arrFromStr) {
    if ((arrFromStr[0] === '+' && arrFromStr[1] === '1')) {
        return isNaN(parseInt(arrFromStr[2]));
    }
    if (arrFromStr[0] != '1') {
        return false;
    }
    return isNaN(parseInt(arrFromStr[1]));
}
/** Purgue the number from characters that aren't numbers
* @returns array<string>
*/
function purgeNumberFromNonNumbers(arrFromStr) {
    const nonAlpha = ['-', '(', ')', ' '];
    return arrFromStr.filter(el => !nonAlpha.includes(el));
}
/** Check if a number is possibly from US
* @returns boolean
*/
function telephoneCheck(str) {
    // Starts either with 1, three numbers or ( number, number, number )
    let regexs = /^(\+1|1|\d{3}|\(\d{3}\))/g;
    const arrFromStr = str.split('');
    let hasProhibitedAlphs = arrFromStr.map(el => prohibitedAlph.includes(el));
    if (hasProhibitedAlphs.some(el => el === true)) {
        return false;
    }
    const hasAParenthesis = arrFromStr.includes('(') || arrFromStr.includes(')');
    const hasntBothParenthesis = !(arrFromStr.includes('(') && arrFromStr.includes(')'));
    if (hasAParenthesis && hasntBothParenthesis) {
        return false;
    }
    // purge the string from non numerics characters
    const purgedStr = purgeNumberFromNonNumbers(arrFromStr);
    if (purgedStr.length < 10) {
        return false;
    }
    if (purgedStr.length > 11 && (arrFromStr[0] !== '+')) {
        return false;
    }
    if (purgedStr.length === 11 && !elevenDigitsChecker(arrFromStr)) {
        return false;
    }
    return regexs.test(str);
}
console.log(telephoneCheck("+1 (757) 622-7382"));
module.exports = telephoneCheck;
