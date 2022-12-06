interface IArabic{ 
    [index: number] : string;
}

const ARABIC: IArabic = {
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
}
const ARABIC_KEYS : readonly number[] = Object
.keys(ARABIC)
.map(
    el => parseInt(el)
).reverse()

function divisorParser(divisor: number, rest: number) {
    let result:Array<number> = []
    let times:number = Math.floor(rest/divisor)
    result = [...`${divisor} `.repeat(times).trim().split(' ').map(el => parseInt(el))]

    return result
}

function divide(num: number) {
    let result: Array<number> = []
    let keys:number[] = ARABIC_KEYS
        .filter(
            (element) => element <= num
        )
    let rest:number = num
    for (const divisor of keys) {
        if (rest < divisor) {
            continue
        }
        result.push(...divisorParser(divisor, rest))
        rest -= Math.floor(rest / divisor) * divisor
    }
    return result
}

function convertToRoman(num: number) {
    // This only works until number 3999
    let divisors: number[] = divide(num)
    divisors = divisors.filter(el => el !== undefined)
    let result:string[] = divisors.map(
        el => ARABIC[el] ?? ''
        )
    result = result.filter(el => el != '')
    return result.join('')
}
console.log(convertToRoman(3999))
module.exports = convertToRoman
// forloop 26 ms to convert 1000+3999 numbers to roman. :) 