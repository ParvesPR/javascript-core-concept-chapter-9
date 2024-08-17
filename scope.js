// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
var x = 55;
function simple() {
   var x = 45;
    console.log(x);
}
simple()