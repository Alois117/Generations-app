// function addnumbers(num1, num2){
//     var sum= num1 + num2;
//     return sum;
// }
// var number1=25;
// var number2=10;
// var result=addnumbers(number1,number2);

// console.log("The Sum is: " + result);

// function cube(length){
//     return length*length*length;
// }
// console.log(cube(3));

// var sumOfSquares = function(num1,num2){
//     return num1**2 + num2**2;
// }
// console.log(sumOfSquares(3,4));

// function calculateTriangleArea(base, height){
//     var area= 0.5*base*height;
//     return area;
// }
// console.log(calculateTriangleArea(3,4));

// function calculateCircleMeasurements(radius){
//     var sumofcircumfarence=2*3.142*radius;
//     var areaofcircle=3.142*radius**2;

//     return sumofcircumfarence + areaofcircle;
// }
// console.log(calculateCircleMeasurements(4));

// function calculateTotalCost(price, taxRate){
//     var TotalCost=price+(taxRate/100*price);
//     return TotalCost;
// }

// console.log(calculateTotalCost(200, 20));

// function checkIfNumber( x ){

//     if ( typeof x === 'number' ){

//         console.log( x + ' is a number.' ); 

//     }else
//         console.log("is not a number");

// }
// console.log(checkIfNumber("5"));


// function calculateGrade(score) {
//     if (score >= 90) {
//         return 'A';
//     } else if (score >= 80) {
//         return 'B';
//     } else if (score >= 70) {
//         return 'C';
//     } else if (score >= 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
// console.log(calculateGrade(78));


// var fruits=function (fruittype){
//     switch (fruittype){
//         case 1:
//             return 'Apple';

//             break;
//         case 2:
//                 return 'Banana';
                
//                 break;
//         case 3:
//                 return 'Orange';
                    
//                 break;
//         case 4:
//                 return 'Mango';
                        
//                 break;
//         case 5:
//                 return 'Grapes';
                    
//                 break;
//         default:
//                 return 'Invalid Choice';
//     }
// }
// console.log(fruits(6));

// let count = 0;

// while (count < 5) {
//   console.log("Count is: " + count);
//   count++;

// }

// let totalSum = 0;
// let number;

// while (number >= 0) {
//     totalSum += number;
//     number = parseFloat(prompt("Enter another positive number:"));
// }

// alert("The total sum of positive numbers entered is: " + totalSum);

// for(var squres, j=1; j<=10; j++){
//   squres=j**2;
//   console.log(j,squres);
// }

// var storage = [1, 'Monday',null];

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
   days.unshift("Sunday");
   days[5]="Alois";
   console.log(days);