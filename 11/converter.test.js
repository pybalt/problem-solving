const convert = require('./Roman_numeral_converter')

test('', () =>
    expect(convert(13)).toBe(typeof String)
    )

test('', ()=>
    expect(convert(13)).toBe("XIII")
)

test('', () => 
    expect(convert(3999)).toBe("MMMCMXCIX")
)

test('', () => 
    expect(convert(1000)).toBe("M")
)

test('', () => 
    expect(convert(2500)).toBe("MMD")
)