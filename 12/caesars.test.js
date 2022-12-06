const rot13 = require('./caesars_cipher') 
test('', ()=>
expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP")
)

test('', ()=>
expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!")
)

test('', ()=>
expect(rot13("SERR YBIR?")).toBe("FREE LOVE?")
)

test('', ()=>
expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")
)