// ** Arrays
// var array = new Array;
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name){
//     console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// array[2]("Yaakov");
// array[2](array[0]);
// console.log(array[3].course);


// Short hand Array Creation
// var names = ["jo", "John", "Meri"];
// // console.log(names[2]);

// for (var i=0; i < names.length; i++){
//     console.log("Hello " + names[i])
// }

// names[100] = "Jim";
// for (var i=0; i < names.length; i++){
//     console.log("Hello " + names[i])
// }
// var name2 = ["Hayya", "You", "Mom", "Joyi"];

// for (var prop in name2) {
//     console.log(prop, ".Hello" + ": " + name2[prop]);
//     }
// var myObj = {
//  name:"Yaakov",
//  course: "Html/CCS/Js",
//  platform: "Coursera"
// };

// for (var prop in myObj) {
// console.log(prop + ": " + myObj[prop]);
// }
// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);

// Closures
// function makeMultiplier (multiplier){
//     return(
//         function (x){
//             return multiplier *x;
//         }
//     );
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));
// //** Look Lecture 52 for Fake Namespaces

// Part 2: Immediately Invoked Function Expressions
