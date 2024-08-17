// Nested Scope
var x = 50; /* Accessible from anywhere */
function simple() {
    var x = 40; /* Accessible only this scope chain */
    console.log(x);
    function nested() {
        var y = 30; /* Accessible only this scope chain */
        console.log(y);
    }
    nested()
}
simple()