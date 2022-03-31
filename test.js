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

// defining an object

// object -instance of a class 

let person = {
    firstName : "Brian",
    lastName : "Kungu",

    // method - property of an object whose value is a function
    getFunction : function(){
        return (`My name is ${person.firstname} ${person.lastName}`);
    },

    // object within an object
    contact : {
        mobile : "0759391973",
        email : "bkungu07@gmail.com",
    }
}

console.log(person.getFunction());