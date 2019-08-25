 // Destructuring

 // Declared Object
 const person = {
    name: 'Fraggy',
    age: 23,
    greet() {
        console.log('Hi, I am ' + this.name); 
    } 
 };
 
// Destructuring Object
 const printName = ({ name }) => {
     console.log(name);  
 }

printName(person);

const { name, age } = person; // Pulled out by property name
console.log(name, age);

// Destructuring Array
const hobbies = ['Sports', 'Cooking']; // Declared Array

const [ value1, value2 ] = hobbies; // Pulled out by position
console.log(value1, value2);
