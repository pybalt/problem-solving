function uniteUnique(...arrays) {
    let s = new Set()
    arrays.forEach(
      (arrEl) => arrEl.forEach(
        el => s.add(el)
      )
    )
    return Array.from(s);
  }
  
module.exports = uniteUnique;
  