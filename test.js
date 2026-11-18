const { Calculator } = require("lucide-react");

function add(a,b){
   return a+b;
}
function sub(a,b){
   return a-b;
}
function multiply(a,b){
   return a*b;
}
function divide(a,b){
   if(b===0){
      return "cannot divide because it will result in infinite";
   }
   return a/b;
}

function calculator(a,b,operation){
   return operation(a,b);
}
console.log("Add:",calculator(10,5,add));
console.log("Subtract:",calculator(1,5,sub));
console.log("Multiply:",calculator(3,5,multiply));
console.log("Divide:",calculator(40,20,divide));
console.log("Divide ",calculator(20,0,divide))