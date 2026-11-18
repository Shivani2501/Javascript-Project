const name ="Shivani"
const repoCount = 50

// console.log(name +repoCount + "Value");

//console.log('Hello my name is ${name} and my repo count is ${repoCount}'); //string interpolation
const gameName = new String('shivani-ss')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(1, 4)
//console.log(newString);
const anotherString =gameName.slice(-8, 4)
//console.log(anotherString)

const newstringOne="  shivani. "
console.log(newstringOne)
console.log(newstringOne.trim())

const url ="https:// shivani.com/hitsh%20shiukla"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))