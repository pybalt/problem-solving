enum status{
    INSUFFICIENT = "INSUFFICIENT_FUNDS",
    CLOSED = "CLOSED",
    OPEN = "OPEN"
}

interface ICid extends Array<any>{
    [index:number] : [string, number]
}

const CURRENCIES : ICid= [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]

function checkCashRegister(price:number, cash:number, cid:Array<[string, number]>) {
    /*Due to imprecision of making operations with float numbers, we are going to
    multiply everything to 10^2, due to the fact that the PENNY is the lowest possible
    currency, which has 2 decimals. */
    let [productPrice, userCash] = [
        Math.floor(price * Math.pow(10, 2)),
        Math.floor(cash * Math.pow(10, 2))
        ]
    const DIF = userCash - productPrice
    let rest = userCash - productPrice
    let machineCash = cid.map(el => el[1]).reduce((previous, current) => previous + current)
    let reversedCid = cid.map(el => [el[0], Math.floor(el[1] * Math.pow(10, 2))]).reverse()
    let reversedCurrencies = CURRENCIES.map(el => [el[0], el[1] * Math.pow(10, 2)]).reverse()
    let index = 0
    let accumulatedDif = 0
    let change: Array<[string, number]> = []
    for (const position of reversedCurrencies) {
        let name = position[0];
        let value = position[1];
        let amount = reversedCid[index++]![1]; // TS typecheck doesn't like this.
        if(!(value && value <= rest)){
            continue
        }
        let number_of_coins_needed = Math.floor(rest / value);
        let number_of_coins_available = amount / value;
        if (number_of_coins_needed > number_of_coins_available && number_of_coins_available > 0) {
            change.push([name, (value * number_of_coins_available) / Math.pow(10, 2)]);
            rest -= value * number_of_coins_available;
            accumulatedDif += value * number_of_coins_available;
        }
        if (number_of_coins_available >= number_of_coins_needed) {
            change.push([position[0], (value * number_of_coins_needed) / Math.pow(10, 2)]);
            rest -= (value * number_of_coins_needed);
            accumulatedDif += value * number_of_coins_needed;
        }
    }
    if(DIF != accumulatedDif){
        return{
            status:status.INSUFFICIENT,
            change:[]
        }
    }
    if(machineCash == change.map(el => el[1]).reduce((current, previous) => current + previous)){
        return{
            status:status.CLOSED,
            change:cid
        }
    }else{
        return{
            status:status.OPEN,
            change:change
        }
    }
  }
console.log(
checkCashRegister(19.5, 20,
    [
       ["PENNY", 0.5],
       ["NICKEL", 0],
       ["DIME", 0],
       ["QUARTER", 0],
       ["ONE", 0],
       ["FIVE", 0],
       ["TEN", 0],
       ["TWENTY", 0],
       ["ONE HUNDRED", 0]
   ]
    )
);
module.exports = checkCashRegister;