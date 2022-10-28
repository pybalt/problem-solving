const translatePigLatin = require('./pig_latin')

test('consonant is translated as onsonantcay', () => {
    expect(translatePigLatin('consonant')).toBe('onsonantcay');
})
test('california is translated as aliforniacay', () => {
    expect(translatePigLatin('california')).toBe('aliforniacay');
})
test('paragraphs is translated to aragraphspay', () => {
    expect(translatePigLatin('paragraphs')).toBe('aragraphspay');
})
test('glove is translated to oveglay', () => {
    expect(translatePigLatin('glove')).toBe('oveglay');
})
test('algorithm is translated to algorithmway', () => {
    expect(translatePigLatin('algorithm')).toBe('algorithmway');
})
test('eight is translated to eightway', () => {
    expect(translatePigLatin('eight')).toBe('eightway');
})
test('schwartz is translated to artzschway', () => {
    expect(translatePigLatin('schwartz')).toBe('artzschway');
})
test('rhythm is translated to rhythmay', () => {
    expect(translatePigLatin('rhythm')).toBe('rhythmay');
})