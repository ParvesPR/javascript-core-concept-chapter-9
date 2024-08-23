// Closure is the data used in a function, which data is not declared in the scope of this function, that is, in this own function, this data is not owned. This data is coming from outside, means it is coming from parent function.
function init() {
    var msg = 'I am Learning Closure'
    return function () {
        console.log(msg);
    }
}
var print = init(); /* Creates the closure */
print()

// use loop and closure
for (var x = 1; x <= 5; x++) {
    (function (n) {

        setTimeout(function () {
            console.log(n);
        }, 1000 * n);
    }(x)
    )
}