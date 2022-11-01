function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

function matchCases(before, after){
    if(before.charAt(0).toUpperCase() === before.charAt(0)){
        after = toTitleCase(after)
    } else {
        after = after.toLowerCase()
    }   
    return after
}

function myReplace(str, before, after) {
    str = str.split(' ')
    after = matchCases(before, after)
    str[str.indexOf(before)] = after
    return str.join(' ');
}


module.exports = myReplace;
  
