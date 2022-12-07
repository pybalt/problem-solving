const telephoneCheck = require('./telephone number validator')

test('', ()=> 
expect(telephoneCheck("555-555-5555")).toBe(
    typeof telephoneCheck("555-555-5555") === 'boolean'
)
);
test('', ()=> 
expect(telephoneCheck("1 555-555-5555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("1 (555) 555-5555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("5555555555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("555-555-5555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("(555)555-5555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("1(555)555-5555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("555-5555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("5555555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("1 555)555-5555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("1 555 555 5555")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("1 456 789 4444")).toBe(true)
);
test('', ()=> 
expect(telephoneCheck("123**&!!asdf#")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("55555555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("(6054756961)")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("2 (757) 622-7382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("0 (757) 622-7382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("-1 (757) 622-7382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("2 757 622-7382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("10 (757) 622-7382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("27576227382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("(275)76227382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("2(757)6227382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("2(757)622-7382")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("555)-555-5555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("(555-555-5555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("(555)5(55?)-5555")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("55 55-55-555-5")).toBe(false)
);
test('', ()=> 
expect(telephoneCheck("11 555-555-5555")).toBe(false)
);