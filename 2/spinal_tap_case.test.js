const spinalCase = require('./spinal_tap_case')

test('`This Is Spinal Tap` should return this-is-spinal-tap', 
()=>
    {
        expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap')
    }
)
test('`thisIsSpinalTap` should return this-is-spinal-tap', 
()=>
    {
        expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap')
    }
)
test('`The_Andy_Griffith_Show` should return the-andy-griffith-show', 
()=>
    {
        expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show')
    }
)
test('`Teletubbies say Eh-oh` should return teletubbies-say-eh-oh', 
()=>
    {
        expect(spinalCase('Teletubbies say Eh-oh')).toBe('teletubbies-say-eh-oh')
    }
)
test('`AllThe-small Things` should return all-the-small-things', 
()=>
    {
        expect(spinalCase('AllThe-small Things')).toBe('all-the-small-things')
    }
)