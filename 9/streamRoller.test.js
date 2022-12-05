const func = require('./streamRoller-recursion.js')

test('', () =>{
    expect(func([1, [2], [3, [[4]]]])).toBe([1,2,3,4])
})

test('', () =>{
    expect([1, {}, [3, [[4]]]]).toBe([1, {}, 3, 4])
})