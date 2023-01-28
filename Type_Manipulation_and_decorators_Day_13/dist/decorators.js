"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const classDecorator = (target) => {
    console.log('This is a Class Decorator');
    console.log(target);
};
const propertyDecorator = (target, propertyKey) => {
    console.log('This is a Property Decorator');
    console.log(target);
    console.log(propertyKey);
};
const methodDecorator = (target, propertyKey) => {
    console.log('This is a Property Decorator');
    console.log(target);
    console.log(propertyKey);
};
let Person = class Person {
    constructor() {
        this.name = 'John Doe';
        this.age = 10;
    }
    // @accessorDecorators
    set setAge(value) {
        value > 18 ? this.age = value : this.age = 10;
    }
    walk() {
        console.log('Walking');
    }
};
__decorate([
    propertyDecorator,
    __metadata("design:type", Object)
], Person.prototype, "name", void 0);
Person = __decorate([
    classDecorator
], Person);
