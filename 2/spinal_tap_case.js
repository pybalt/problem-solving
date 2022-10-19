function spinalCase(str) {
    str = str.trim()
    let regex = /([A-Z][a-z]+)|\s|\_|\-/
    str = str.split(regex).filter(e=>e)
    str = str.map(el => el.toLowerCase())
    str = str.join('-')
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
/*
spinalCase("This Is Spinal Tap") 

    should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") 

    should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") 

    should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") 

    should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") 

    should return the string all-the-small-things.

*/