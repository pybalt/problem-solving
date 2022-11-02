sortedUnion = require('./sorted_union')


test('Case 1',

()=>
expect(sortedUnion([1, 2, 3], [5, 2, 1]))
.toStrictEqual([1, 2, 3, 5])
)

test('Case 2',
() => 
expect(sortedUnion([1, 3, 2], [5, 4], [5, 6]))
.toStrictEqual([1, 3, 2, 5, 4, 6])
)

test('Case 3',
() => 
expect(sortedUnion([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
.toStrictEqual([1, 3, 2, 5, 4])
)

test('Case 4',
() => 
expect(sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
.toStrictEqual([1, 2, 3, 5, 4, 6, 7, 8])
)

test('Case 5', 

()=>
    expect(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1], [9, 1]))
    .toStrictEqual([ 1, 3, 2, 5, 4, 9 ])
)