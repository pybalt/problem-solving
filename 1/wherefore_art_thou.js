function whatIsInAName(collection, source) {
  let startTime = performance.now();
  let arr = [];
  const keys = Object.keys(source);
  const values = Object.values(source);
  let hadTheValues = [];
  collection.forEach(function (element) {
    let elementMatchesTheValues = [];
    values.forEach(function (value, index) {
      let elementValue = element[keys[index]];
      let matchesValue = elementValue === value; //boolean
      elementMatchesTheValues.push(matchesValue);
    });
    hadTheValues.push(elementMatchesTheValues);
  });
  hadTheValues = hadTheValues.map((el) => el.every((k) => k === true));
  hadTheValues.forEach(function (value, index) {
    value ? arr.push(collection[index]) : undefined;
  });
  let endTime = performance.now();
  console.log("Performance: " + (endTime - startTime));
  return arr;
}

module.exports = whatIsInAName;
