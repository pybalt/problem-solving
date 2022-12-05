// I couldn't solve this problem. So I'll leave the solution so I'll see it later.

function steamrollArray(arr:Array<any>) {
    const flattenedArray:Array<any> = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//module.exports = steamrollArray;