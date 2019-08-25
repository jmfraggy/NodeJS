// This is a summary of JS

// New gen JS - let instead of var
const name = 'Fraggy'; // const the value will not be changed.
let age = 22;
const hasHobbies = true;

// It's a good practice to use const to ensure that a value is not going to change.
// name = "Fragui"; // throw error
age = 23 ;
 
// Arrow Function
const summarizeUser = (userName, userAge, userHasHobby) =>{
    return (  
        'Name is ' + 
        userName +  
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
        );
}

// Arrow Functions
const add = (a, b) => a + b; // One statement 
const addOne = a => a + 1; // One argument
const addRandom = () => 1 + 2; // No argument   

console.log(add(1, 2));
console.log(addOne(1));  
console.log(summarizeUser(name, age, hasHobbies));
