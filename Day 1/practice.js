/*function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Darshika", sayGoodbye);

(function() {
    car = 5;
    for (let i = 0; i<car;i++)
        console.log(`${i}IIFE executed!`);
})();

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]
);


let fruits=[];
car = 5;

for (let i = 0; i<car;i++){
    if (i%2==0){
        fruits.push(i);
    }
    else{
        fruits.unshift(i);
    }
}

console.log(fruits);

let person = {
    name: "Darshika",
    age: 22
};
console.log(person);

*/
/*
//1
var x = 10;
//2
var x = 6;
var y = 10;
x = x + y;
y = x - y;
x = x - y;

console.log(x,y);
//3
let num = prompt("Enter number:");
if (num%2==0)
    console.log("Even");
else
    console.log("Odd");

//4
a = prompt();
b = prompt();
c = prompt();

if (a>b){
    if (a>c){
        console.log(a);
    }
    else{
        console.log(c);
    }
}else{
    if (b>c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

//5
a=prompt();
function Meh(){
switch (true) {
    case (a > 0):
        console.log("Positive");
        break;
    case (a < 0):
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}
}
a=prompt();
Meh(a);
//6
a=prompt();
console.log(a*a);


//7
function Reverse(){
    var b = a.split("").reverse().join("");
    console.log(b);
}
var a = prompt();
Reverse(a);


//8
function Palindrome(a) {
    var b = a.split("").reverse().join("");

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { 
            console.log("Not a palindrome");
            return; 
        }
    }
    console.log("Palindrome");
}

var a = prompt("Enter a string:");
Palindrome(a);

//9
function fact(){
    var f = 1;
    for (var i = 1; i <= a; i++){
        f = f * i;
    }
    console.log(f);
}

a= prompt();
fact(a);

//10
function CtoF(){
    C = ((F-32)*5)/9;
    console.log(C);
}
F=prompt()
CtoF(F)

//11
var a = prompt();
var b = a.split(" ").map(Number);
console.log(b);

var max = b[0];

for (var i = 1; i < b.length; i++) {
    if (b[i] > max) { 
        max = b[i];
    }
}

console.log(max);

//12
var a = prompt();
var b = a.split(" ");
var c = b.reverse();
console.log(c);
//13
var a = prompt();
var b = a.split(" ").map(Number);
for (var i = 0; i < b.length; i++){
    for (var j = i+1; j < b.length; j++){
        if (b[i] == b[j]){
            b.splice(j,1);
            j--;
        }
    }
}
console.log(b)
*/