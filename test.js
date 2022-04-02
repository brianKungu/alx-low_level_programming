// function print(a){
    
//     if (a < 0) {
//         return 0;
//     }
//     console.log(a + (a-1));
//     a --;
//     return a;
// }

// function printResult(){
//     print(4);
//     return 0;
// }

// printResult();

const reverseString = (str) => {
    result=str.split('').reverse().join('')
    console.log(result);
}

const displayResuly = () => {
    reverseString("Geeks for Geeks");
}

displayResuly();

// object -instance of a class 
// objects can be created in two ways

// 1. Object Literal

// defining an object
let person = {
    firstName : "Brian",
    lastName : "Kungu",

    // method - property of an object whose value is a function
    getFunction : function(){
        return (`My name is ${person.firstName} ${person.lastName}`);
    },

    // object within an object
    contact : {
        mobile : "0759391973",
        email : "bkungu07@gmail.com",
    },

    // display method
    displayResult : () => {
        return(`My name is ${person.firstName} ${person.lastName}. \nPhone number:${person.contact.mobile}, \nEmail Address: ${person.contact.email}`)
    }
}

console.log(person.displayResult());
// console.log(person.contact.mobile)

// 2. object constructor
function laptop(name,core,storage){
    this.name = name;
    this.core = core;
    this.storage = storage;
    let overall = this.name + this.core + this.storage;
    return overall;
}

// creating new instances of laptop object
let laptop1 = new laptop("HP","i3","500GB HDD")
console.log(`${laptop1.name} ${laptop1.core} ${laptop1.storage}`)




// CLASSES
class P{
    constructor(fName, lName){
    this.fName = fName;
    this.lName = lName;   
}
    getFullNames(){
        return this.fName + this.lName;
    }
}

// creating object of the P class
let individual1 = new P ("Andrew", "Nderitu");
let individual2 = new P ("Marcus", "Mbogo");
console.log(individual1.getFullNames())