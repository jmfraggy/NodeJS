 // Objects, Properties & Methods

 const person = {
    name: 'Fraggy',
    age: 23,
    greet() {
        console.log('Hi, I am ' + this.name); 
    } 
 };
 
 person.greet();

 // Arrays, Data Scturcutres, Methods
 const hobbies = ['Sports', 'Cooking'];

 for(let hobby of hobbies){
     console.log(hobby); 
 }  

 console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
 console.log(hobbies);

 hobbies.push('Programming');
 console.log(hobbies);
   
// Spread - Pull elements or properties out of arrays or objects
// Immutability - Never edit existing values but replace them with copies plus the changes
const copiedPerson = {...person};
console.log(copiedPerson);

const copiedArray = [...hobbies]; // Spread Operator - take out the elemets 
console.log(copiedArray);

// Rest - Merge multiple arguments into an array

const toArray = (...args) => {
    return args; 
}

console.log(toArray(1, 2 ,3 , 4));
