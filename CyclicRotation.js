// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    var x;

    if (A.length) {
        for (var i=0; i<K; i++) {
            x = A.pop();
            A.unshift(x);
        }
    }

    return A;
}
