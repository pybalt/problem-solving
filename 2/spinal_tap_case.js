function spinalCase(str) {
    str = str.trim()
    let regex = /([A-Z][a-z]+)|\s|\_|\-/
    str = str.split(regex).filter(e=>e)
    str = str.map(el => el.toLowerCase())
    str = str.join('-')
    return str;
  }
module.exports = spinalCase;
