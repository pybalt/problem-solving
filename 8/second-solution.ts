// This is better. But I think it can be better.

function divisors(n:number){
    // Vector to store half
    // of the divisors
    let vector:Array<number> = [];
    let divisors:Array<number> = [];
    let index = 0;
    for (let i:number = 1; i <= Math.sqrt(n); i++)
    {   
        if (n % i == 0)
        {
            if (n / i == i) 
                divisors.push(i);
            else
            {
                divisors.push(i);
                vector[index++] = n / i;
            }
        }
    }
    return vector.concat([...divisors].reverse())
}
function smallestCommons(arr:Array<number>) {
    let [min, max] = [...arr].sort((a, b) => a - b)
    const RANGE = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)
    const MAXVALUE = RANGE.reduce((previous, current) => previous*current)
    const DIVISORS = divisors(MAXVALUE)
    const RESULT = DIVISORS.filter(i => RANGE.every(el => i%el == 0)).reverse()
    return RESULT[0]
}
console.log(
    smallestCommons([1, 5])
)
    