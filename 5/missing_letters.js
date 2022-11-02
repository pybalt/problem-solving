function fearNotLetter(str) {
    str = str.split('')
    let solution = undefined
    let previous = str[0].charCodeAt(0) - 1
    for(let i = 0 ; i < str.length; i++){

        let letterASCII = str[i].charCodeAt()

        if(previous + 1 != letterASCII){
            solution = String.fromCharCode(previous + 1)
            break
        }
        previous = letterASCII
    }
    return solution;
  }

module.exports = fearNotLetter
