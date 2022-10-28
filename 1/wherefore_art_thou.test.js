const whatIsInAName = require('./wherefore_art_thou')

test(`Array of objects. We consult if one of them have the property "last" defined as Capulet`, 
() => {
    expect(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ], { last: "Capulet" }))
    
    .toStrictEqual([{ first: "Tybalt", last: "Capulet" }])
})

test(`Using different syntax for object. 
    We consult if one of them has the property apple defined as 1.`, ()=>
{
    expect(
        whatIsInAName(
    [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }
    ))

    .toStrictEqual([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }])
})

test(`We consult if one of the objects has apple equal to 1, and bat equal to 2, 
both of them simultaneously`, ()=>
{
    expect(
        whatIsInAName(
        [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
            {"apple": 1, "bat": 2 })
    )
    .toStrictEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }])
})

test(`We consult if there's an object with 1 apple and 2 cookies`, ()=>
{
    expect(
        whatIsInAName(
        [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
        
        { "apple": 1, "cookie": 2 }
        ))

    .toStrictEqual([{ "apple": 1, "bat": 2, "cookie": 2 }])
})

test(`We consult if there's an object with 1 apple and 2 bats`, ()=>
{
    expect(
        whatIsInAName(
    [
        { "apple": 1, "bat": 2 },
        { "apple": 1 },
        { "apple": 1, "bat": 2, "cookie": 2 },
        { "bat":2 }
    ],
    { "apple": 1, "bat": 2 }
       )
       )

    .toStrictEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }])
})

test(`Keys: same amount, same name, but one of the values is different.`, ()=>
{
    expect(
        whatIsInAName(
        [{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
        )
    .toStrictEqual([])
})

test(`Keys: different amounts, 
the second is a subset of the first, 
but the second has one value that is different.`, ()=>
{
    expect(
        whatIsInAName(
        [{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})
        )
    .toStrictEqual([])
})