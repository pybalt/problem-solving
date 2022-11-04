const sumFibs = require('./fib_odd_numbers')


test('', 
() => {
    expect(typeof sumFibs(1))
    .toBe("number")
})

test('', 
() => {
    expect(sumFibs(1000))
    .toBe(1785)
})

test('', 
() => {
    expect(sumFibs(4000000))
    .toBe(4613732)
})

test('', 
() => {
    expect(sumFibs(4))
    .toBe(5)
})


test('', 
() => {
    expect(sumFibs(75024))
    .toBe(60696)
})

test('', 
() => {
    expect(sumFibs(75025))
    .toBe(135721)
})

