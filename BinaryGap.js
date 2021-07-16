// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    var x = N.toString(2);

    gap(x);

    return gap(x);
}

function gap(n) {
    var a = [];
    var c = 0;
    var aux = 0;

    for(var i=0; i<n.length; i++) {
        
        if (n[i] == 0 && (n.substring(i).match(/1/g) || []).length) {
            c++;
        } else {
            if (c > aux) aux = c;
            c = 0;
        }
    }
    return aux;
}
