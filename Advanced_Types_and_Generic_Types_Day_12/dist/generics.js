"use strict";
// let names:string[] = ['Ian', 'Elvis']
function AddPerson(name, age) {
    let person1 = {};
    if (name.length > 5) {
        person1.name = name;
    }
    else {
        person1.name = 'John Doe';
    }
    if (age > 10) {
        person1.age = age;
    }
    else {
        person1.age = 20;
    }
    return person1;
}
console.log(AddPerson('kuku', 15));
