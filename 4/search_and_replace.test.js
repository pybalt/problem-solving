const myReplace = require('./search_and_replace')

test(`"myReplace("Let us go to the store", "store", "mall")`, 
()=>{
    expect(myReplace("Let us go to the store", "store", "mall"))
    .toBe("Let us go to the mall");
})

test(`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")`,
()=>{
    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
    .toBe("He is Sitting on the couch");
})

test(`myReplace("I think we should look up there", "up", "Down")`,
()=>{
    expect(myReplace("I think we should look up there", "up", "Down"))
    .toBe("I think we should look down there");
})

test(`myReplace("This has a spellngi error", "spellngi", "spelling")`,
()=>{
    expect(myReplace("This has a spellngi error", "spellngi", "spelling"))
    .toBe("This has a spelling error");
})
