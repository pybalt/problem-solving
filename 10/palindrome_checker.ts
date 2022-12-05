function palindrome(str:string) {
    let arrayStr:Array<string> = Array.from(str)
    arrayStr = arrayStr.filter( 
        c => (
        c.toUpperCase() != c.toLowerCase()  ) 
        || Number.isInteger(parseInt(c))    )
    arrayStr = arrayStr.map(l => l.toLowerCase())
    return arrayStr.every((el, index) => el === [...arrayStr].reverse()[index]);
}

console.log(
palindrome("1 eye for of 1 eye.")
)

module.exports = palindrome 