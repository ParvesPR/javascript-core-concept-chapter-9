var a = 10;
function A() {
    var b = 20;
    function B() {
        var c = 30;
        // console.log(c);
    }
    function C() {
        var d = 40;
        console.log(d);
    }
    // console.log(b);
    D()
    C()
    B()
}
A()
function D(n) {
    return n + a;
}

/* Scope chain explanation 
A()= var a, var b, B(),C(),D()
B()= var a, var b, var c, B(),C(),D()
C()= var a, var b, var d, B(),C(),D()
d()= var a, var b, n, A()
*/
