interface INonAlpha {
    [index:number] : string
}


function rot13(str:string) {
    str = str.toLowerCase()
    const MAX:number = 122
    let nonAlpha : INonAlpha = {}
    let convert:Array<any> = Array.from(str)
    .map((el, index) => {
        if (el.toUpperCase() === el.toLowerCase()) {
            nonAlpha[index] = el
            return " "
        }
        else{
            return str.charCodeAt(index)
        }
    })

    let converted = convert.map((el, index) => {
        if (el === " ") {
            return nonAlpha[index]
        }
        if (el + 13 > MAX) {
            return el - 13
        }
        return el + 13

    }) ;
    let result = converted
    .map(
        el => typeof el === 'number'
        ? String.fromCharCode(el) 
        : el)
    return result.join('').toUpperCase();
  }
  

rot13("SERR PBQR PNZC");
// "FREE CODE CAMP" 
module.exports = rot13