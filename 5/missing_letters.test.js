const fearNotLetter = require('./missing_letters')

test('abce', () => {
    expect(fearNotLetter("abce"))
    .toBe("d")
})

test('abcdefghjklmno', () => {
    expect(fearNotLetter("abcdefghjklmno"))
    .toBe("i")
})
test('stvwx', () => {
    expect(fearNotLetter("stvwx"))
    .toBe("u")
})
test('bcdf', () => {
    expect(fearNotLetter("bcdf"))
    .toBe("e")
})
test('abcdefghijklmnopqrstuvwxyz', () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
    .toBe(undefined)
})