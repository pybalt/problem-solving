// This is the worst solution I have ever thought

function retrieveAllNumbers(arr:Array<number>) {
    let allNumbers:Array<number> = []
    for (let i:number = arr[0]; i <= arr[1]; i++) {
        allNumbers.push(i)
    }
    return allNumbers
}

function sortArray(arr:Array<number>) {
    return arr.sort((a, b) => a - b)
}

function retrieveMultiples(number:number, start:number, howMany:number) {
    let numberMultiples:Array<number> = []
    for(let i:number = start/number; numberMultiples.length < howMany; i++) {
        numberMultiples.push(i*number)
    }

    return numberMultiples
}

function retrieveCommonMultiples(arr:Array< Array<number> >){

    return arr[0].filter(el => arr[1].includes(el))
}

function retrieveMaxMultiple(arr:Array<number>){
   return Math.max(...arr)
}

function smallestCommons(arr:Array<number>) {
    arr = sortArray(arr)
    let count = 1
    let rangeOfNumbers = retrieveAllNumbers(arr)
    let maxMultiple:number = 0
    let arrayOfCommonMultiples:Array<number> = []
    let solution:Array<number> = []
    let multiplesFirstNumber:Array<number> = retrieveMultiples(arr[0], arr[0], 100)
    let multiplesSecondNumber:Array<number> = retrieveMultiples(arr[1], arr[1], 100)
    do {
        arrayOfCommonMultiples = retrieveCommonMultiples([multiplesFirstNumber, multiplesSecondNumber])
        maxMultiple = retrieveMaxMultiple(arrayOfCommonMultiples)

        solution = solution.concat(arrayOfCommonMultiples
            .filter(multiple => rangeOfNumbers.every(
                number => multiple % number == 0
        )))

        if(solution.length == 0){
            multiplesFirstNumber = retrieveMultiples(arr[0], maxMultiple, 10*count)
            multiplesSecondNumber = retrieveMultiples(arr[1], maxMultiple, 10*count)
        }

        count++
        console.log(solution)
    } while (solution.length == 0);
    return solution[0];
}

smallestCommons([1, 5]);
