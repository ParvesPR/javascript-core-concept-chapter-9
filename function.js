// Function Declaration
simple()
function simple() {
    console.log('I am simple function');
}

// Function Expression

var newSimple = function () {
    console.log('I am new simple function');
}
newSimple()

// Creational phase
// abc = func ref
// newSimple= undefined

// Executional phase
// abc = call abc function
// newSimple = call newSimple function
// newSimple = error if call newSimple function before declare
