function uniteUnique(...arrays) {

  return Array.from(new Set(arrays.flat()));
}

module.exports = uniteUnique;
