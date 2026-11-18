//FOR interview preparation refer lecture 9 of js by code and chai
//https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9
//Primitive
// almost 7 categories: String, 
// Number, Boolean, null, undefined, Symbol, BigINT
const score = 100
const scroevalue =100.3
const isLoggedIn =false
const outsideTemp =null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id == anotherId);
const bignumber =1234n
//JavaScript is "Dynamically typed language" because all type 
// checks are being performed during Runtime
// Reference type(Non primitve)
//Array, Objects, Functions
const heros =["shaktian","naagraaj", "doga"]
let myObj ={
    name: "shivani",
    age: 26,
    }
const myFuction = function(){
    console.log("hello world");
}
console.log(typeof anotherId)

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
