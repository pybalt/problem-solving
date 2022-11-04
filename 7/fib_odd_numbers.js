function sumFibs(num) {

    let fib = [0, 1]
    
    for(let i = 1; (fib[i] + fib[i-1]) <= num ; i++){
      let fibNum = fib[i] + fib[i-1]
      fib.push(fibNum)
    }
   
    return fib.filter(el => el%2 != 0)
             .reduce( (acc, value) => acc += value)
  }
  
module.exports = sumFibs;