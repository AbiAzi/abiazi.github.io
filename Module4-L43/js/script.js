//Object Creation
/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);

var stockPropName = "stock of company";
company[stockPropName] = 110;
console.log(company);

console.log("Stock price is: " + company[stockPropName]);
*/
// **Better way: Object Literal
/*var Facebook={
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};

console.log(Facebook.ceo.firstName);
console.log()
*/
// ** Functions Explained
/*
function multiply(x, y){
    return x * y;
}
console.log(multiply(6,7));
console.log(multiply);
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function Factory
function makemultiplier(multiplier){
    var myFunc = function (x){
        return multiplier * x;
    };
   return myFunc; 
}
var multiplyBy3 = makemultiplier(3); 
console.log(multiplyBy3(10));
var doubleAll = makemultiplier(2);
console.log(doubleAll(100));

// *** Passing functions as Argumrnt
function doOperationOn(x, operation){
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
*/
// *** Passing Variables by Value
/*var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update: ");
console.log("a: " + a);
console.log("b: " + b);
*/
/*
// **** Passing by Reference
var a = { x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5 
console.log("after b.x update:");
console.log(a);
console.log(b);
*/
/*
// Pass by Reference vs by Value
function changePrimitive(primValue){
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}
var Value = 7;
changePrimitive(Value);
console.log("after changePrimitive, orig value: ");
console.log(Value);
*/
/*
function changeObject(objValue){
    console.log("in changeObj...");
    console.log("before:");
    console.log(objValue);

    objValuebjValue = 5;
    console.log("after:");
    console.log(objValue);
}
Value = {x: 7};
changeObject(objValue);
console.log("after changePrimitive, orig value: ");
console.log(Value);
*/
// ** Function Constructors, prototype, and the 'this' Keyword
/*
function test() {
    console.log("Hello Coursera");
    console.log(this);
    this.myName = "Yaakov";
}
test();
console.log(window.myName);
function Circle (radius){ 
   this.radius = radius;
   this.getArea =
   function(){
    return Math.PI * Math.pow(this.radius, 2);
   };
}
    Circle.prototype.getArea =
    function (){
    return Math.PI * Math.pow(this.radius, 2); 
    }
var myCircle = new Circle(10);
console.log(myCircle);
var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
*/
// **Object Literals $ "this" keyword
var literalCircle = {
    radius: 10,

    getArea: function () {
      var self = this;
      console.log(this);
      var increaseRadius = function (){
        self.radius = 20;
      };
      increaseRadius();

      return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());
// Quiz
/*function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
  }
  
  var max = new Dog("Max", "Buddy");
  max.bark();
  //Answer = Max Likes barking! Bark!
  */
 