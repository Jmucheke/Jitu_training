let testnum = [12, 1, 5784, 153, 493, 8208, 4934, 9474]
for (let i of testnum) { 
 // console.log(i);
 let x = i
 function power(x, y) {
  if (y == 0)
   return 1;
  if (y % 2 == 0)
   return power(x, parseInt(y / 2, 10)) *
    power(x, parseInt(y / 2, 10));

  return x * power(x, parseInt(y / 2, 10)) *
   power(x, parseInt(y / 2, 10));
 }

 function order(x) {
  let n = 0;
  while (x != 0) {
   n++;
   x = parseInt(x / 10, 10);
  }
  return n;
 }

 function isArmstrong(x) {

  let n = order(x);
  let temp = x, sum = 0;
  while (temp != 0) {
   let r = temp % 10;
   sum = sum + power(r, n);
   temp = parseInt(temp / 10, 10);
  }
  return (sum == x);
 }


 
 if (isArmstrong(x)) {
  console.log(`The number ${x} is an armstrong number`);
 }
 else {
  console.log(`The number ${x} is not an armstrong number`);
 }


}
