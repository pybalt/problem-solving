function splitAtIndex(str, index){
    const result = [str.slice(0, index), str.slice(index)]
    return result
  }
  
function doesStartWithVowels(str){
const startWithVowels = /^[(a)|(e)|(i)|(o)|(u)]/
return startWithVowels.test(str)
}

function lastConsonantIndex(str){
const consonant = /(?![aeiou])[a-z]/gi
let subStrIndex = 0

for(let letter in str){
    if(!(str[letter].match(consonant))){
    break
    }
    subStrIndex = parseInt(letter)
}

return subStrIndex + 1
}

function translatePigLatin(str) {

if (doesStartWithVowels(str)){
    return str+"way"
}

let consonantIndexes = lastConsonantIndex(str) - str.length

let arrStrSplitted = splitAtIndex(str, consonantIndexes)

arrStrSplitted.reverse()
arrStrSplitted.push("ay")

let result = arrStrSplitted.join('')
return result
}

module.exports = translatePigLatin;
