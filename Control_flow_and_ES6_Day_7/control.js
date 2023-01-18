let x=""
// if the the value of x is 1 or greater than 0 then the value within the if statement will be printed
// if(x){
//  console.log("Hello World!");
// }else{
//  console.log("This is false");

// }

x = 100
// if(x>10&& x<20){
//  console.log("Hello World");
// }else if (x>20)
//  console.log("Greater than 20");
// else
//  console.log("This is false");

// ternary operator

// x>10 && x<20 ? console.log("Hello man"):x>20?console.log("Greater than 20"):console.log("This is false");

// if nested

// 60 - 69 --> B
// 61 - 64 --> weak B
// 65 - 69 --> strong B

// let score =67
// if(score){
//  if(score>60 && score<70){
//   console.log("This is a B");
//   if(score>60&&score<=64)
//   console.log("This is a weak B");
//   else{
//    console.log("This is a strong B");
//   }
//  }
// }

//  Switch case

let day = new Date().getDay()

switch (day){
 case 0:
  console.log("Its Sunday");
 case 1:
  console.log("Its Monday");
 case 2:
  console.log("Its Tuesday");
 case 3:
  console.log("Its Wednesday");
 case 4:
  console.log("Its Thursday");
 case 5:
  console.log("Its Friday");
 case 6:
  console.log("Its Saturday");
}

