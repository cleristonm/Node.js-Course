const person = {
    name: 'Keko',
    age: 39,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};


console.log(person);
person.greet();

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies){
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby + ' is nice'));
console.log(hobbies);