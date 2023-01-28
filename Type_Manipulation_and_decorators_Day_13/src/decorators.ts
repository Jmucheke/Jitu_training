const classDecorator=(target:object)=>{
 console.log('This is a Class Decorator');
 console.log(target); 
}

const propertyDecorator:PropertyDecorator = (target: object,propertyKey:string|Symbol) => {
 console.log('This is a Property Decorator');
 console.log(target);
 console.log(propertyKey); 
}
const methodDecorator: MethodDecorator = (target: object, propertyKey: string | Symbol) => {
 console.log('This is a Property Decorator');
 console.log(target);
 console.log(propertyKey);
}
@classDecorator
class Person{
 @propertyDecorator
 name='John Doe'

 private age=10

 // @accessorDecorators
 set setAge(value:number){
  value>18? this.age=value : this.age=10
 }
 walk(){
  console.log('Walking');
  
 }
}