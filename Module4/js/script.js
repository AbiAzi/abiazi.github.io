var message = "in global";
console.log("global: message = " + message);
var x = "20";
var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    b();
}

/*function b () {
    console.log("b: message = " + message);
}
a();
var a = function () {
    var message = "inside aa";
    console.log("a: message = " + message);
    b();
    function b () {
        console.log("b: message = " + message);
    }
}
a();
if (x = 20){ console.log("x is not cool!");
}

var y;
 {
    console.log("y is not defined");
}
y = 6;

if (y == undefined) {
    console.log("not available");
}
else {
    console.log("My Computer");
}*/
// ****string concactination
var string = "Hello";
string += " world" ;//string = string + "world";
console.log(string + "!")
// ****Regular Math operations: +, -,*,/
console.log((5+4)/3);
console.log(undefined/5);
function test1 (a){
    console.log( a / 5);
}
test1();
// ****Equality
/*
var x=4, y = 5;
if (x == y) {
    console.log ("x=4 is equal to y=4");
}

x= "5";
if (x == y) {
    console.log ("x=5 is equal to y=5");
}


// ****Strict Equality
if (x === y) {
    console.log ("Strict: x='5' is equal to y=5");
}
else {
    console.log ("Strict: x='5' is not equal to y=5");
}
*/
/*//*** IF statement (all false)
if (false || null || undefined || "" || 0 || NaN){
    console.log("This line won't ever excute");
}
else {
    console.log("All False");
}

//Boolean(null || "" || NaN || undefined || 0 || false) gives always "false"
//Bollean ( "Any value") gives a "True" value
//** If statement (all true)
if (true && "hello" && 1 && -1 && "false"){
    console.log ("All true");
}*/
/*// *** Best Practice for {} style
function a()
{
    return
    {
        name: "Yaakov"
    };
}

function b(){
    return {
        name:"Yaakov"
    };
}

console.log(a());
console.log(b());
*/
/*// ** For Loop
var sum =0;
for (var i = 0; i <10; i++){
    console.log(i);
    sum = sum +i;
}
console.log("sum of 0 through 9 is: " +sum);
*/
/// L44: Handling Defaults
function orderchickenwith(sideDish){
    if (sideDish === undefined){
        sideDish = "whatever!";
    }// or we can use simply: sideDish = sideDish || "whatever!";
    console.log("chicken with " + sideDish);
}
orderchickenwith("noodles");
orderchickenwith();

var m = 10;
if ( (null) || (console.log("Hello")) || m > 5 ) {
  console.log("Hello");
}