#! usr/bin/env node
function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(8, 5);
console.log(result);
// 2nd function examples
function greet() {
    return "Hello World";
}
let message = greet();
console.log(message);
// 3rd function 
function user(name, fName, rollNum) {
    return [name, fName, rollNum];
}
let call = user("Hamza", "Muhammad Zafar-uddin", 12345);
console.log(call);
export {};
