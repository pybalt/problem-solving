const fun = require(`./palindrome_checker`)

test('', () =>
expect(fun("eye"))
.toBe(false||true)
)
test('', () =>
expect(fun("eye"))
.toBe(true)
)
test('', () =>
expect(fun("_eye"))
.toBe(true)
)
test('', () =>
expect(fun("not a palindrome"))
.toBe(false)
)
test('', () =>
expect(fun("1 eye for of 1 eye."))
.toBe(false)
)
test('', () =>
expect(fun("My age is 0, 0 si ega ym."))
.toBe(true)
)
test('', () =>
expect(fun("A man, a plan, a canal. Panama"))
.toBe(true)
)