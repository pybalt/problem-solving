
function whatIsInAName(collection, source) {
    let startTime = performance.now()
    let arr = [];
    const keys = Object.keys(source)
    const values = Object.values(source)
    let hadTheValues = [] 
    collection.forEach(
      function(element)
      {
        let elementMatchesTheValues = []
        values.forEach(
          function(value, index){
            let elementValue = element[keys[index]]
            let matchesValue = elementValue === value //boolean
            elementMatchesTheValues.push(matchesValue)
          }
        )
        hadTheValues.push(elementMatchesTheValues)
      }
    )
    hadTheValues = hadTheValues.map(el => el.every(k => k===true))
    hadTheValues.forEach(
      function(value, index)
      {
          value ? arr.push(collection[index]) : undefined
      }
    )
    let endTime = performance.now()
    console.log("Performance: " + (endTime - startTime))
    return arr
  }
  
  whatIsInAName(
    
    [
        { "apple": 1, "bat": 2 }, { "bat": 2 }, 
        { "apple": 1, "bat": 2, "cookie": 2 }
    ], 
    
    { "apple": 1, "bat": 2 }
    
    );

/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return [].

whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) should return [].
*/
