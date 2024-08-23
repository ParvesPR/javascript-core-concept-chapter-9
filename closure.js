function init() {
    var msg= 'I am Learning Closure'
    return function () {
        console.log(msg);
    }
}
var print= init(); /* Creates the closure */
print()