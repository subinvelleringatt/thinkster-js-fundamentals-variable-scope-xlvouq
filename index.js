const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Variable Scope</h1>`;

// Global Scope
// Create a variable with global scope, and then print it to the console by using it inside a Function

let a='Subin'
function prnt() {
  console.log('Name' ,a)
}
prnt()




// Function Scope
// Create a function, and then create a variable inside that function. Print the variable to the console:
// 1. inside the function (both before and after the declaration) // 2. outside the function to see the difference


function prnt1(){
  console.log(a2)
  let a2='Funcs'
  console.log(a2)
}
prnt1()


// Block Scope
// Create a function, and then create a variable inside an if statement in that function. 
// Print the variable to the console inside the block and outside the block to see the difference
// Note: StackBlitz may hide the error from you; you can look in the page's developer tools to see the answer, or copy this section to an HTML page

function prnt2(){
const count=0
  if (count == 0)  {
    let a3="subin if inside";
    console.log(a3)
  }
      console.log(a3)
}

prnt2()




// var, let, const
// Declare a variable with each of the above keywords, two for const (one that has a number, string, or boolean and one object or array)
// Try to alter the value of each variable and see what happens in each scenario
// On the object or array, try adding to the array or altering an attribute on the object as well as reassigning the value
var a4='subin'
let a5='alex'
const a6='subin'
const a7=['bell','job','apple']
a4='raju'
a5='more'
a6='pnp'
a7.push('nice')
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7)
a7='juice'
console.log(a7)

// Value vs. Reference
// Declare a variable with a value of a number, string, or boolean, then copy it to another Variable
// Log both variables, then change the value of one and log them again
// Declare a variable with a value of an object or an array, then copy it to another Variable
// Log both variables, then change the value of an attribute on one object or add an item to one array and log them again
let a =4
let b = a
console.log(a)
console.log(b)
let c = ['a','b','c']
let d = c
console.log(c)
console.log(d)
c.push('quill')
console.log(c)
console.log(d)