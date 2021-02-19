const person = {
    name: 'Keko',
    age: 39,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};


console.log(person);
person.greet();

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies){
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby + ' is nice'));
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

//rest operators
const toArray = (...args) =>  args

console.log(toArray(1,2,3,4));

//Destruction syntax
// Object destructing
const printName = ({name}) => {
    console.log(name);
}

printName(person);

const { name, age }  = person;

console.log(name +" is "+age+" years old");

//Array destructing

const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);