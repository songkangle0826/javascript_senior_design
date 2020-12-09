/*
    斐波那契数列：
    斐波那契数列指的是这样一个数列：1 1 2 3 5 8 13 21 34
*/

// 求第n个斐波那契数

function fib2(n){
    if(n==0) return 0;
    if(n<=2) return 1;
    var f2 = 1;
    var f1 = 1;
    for(let i = 3;i < n; i++){
        f2 = f2 + f1;
        f1 = f2 - f1;
    }
    return f2;
}



// 第一种解法： 递归
console.time()
// 时间复杂度 为O(2^n)
function fibonacci(n){
    if(n<=1) return n;
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(10))
console.log(fibonacci(32))
// console.log(fibonacci(64));
console.timeEnd()

// 
console.time()
// 时间复杂度 O(n)
function fibonacci1(n){
    if(n<=1) return n;
    let f1 = 1;
    let f2 = 1;
    for(let i = 3; i <= n; i++){
        // var f3 = f1;
        // f1 = f2;
        // f2 = f2 + f3;

        var sum = f1 + f2;
        f1 = f2;
        f2 = sum;

        // f2 = f2 + f1;
        // f1 = f2 - f1;
        
    }
    return f2;
}

function fib(n){
    if(n<=1) return n;
    let f1 = 0;
    let f2 = 1;
    for(let i = 0; i < n - 1; i++){
        f2 = f1 + f2;
        f1 = f2 - f1;
    }
}

// console.log(fibonacci1(1))
// console.log(fibonacci1(2))
// console.log(fibonacci1(3))
// console.log(fibonacci1(4))
// console.log(fibonacci1(5))
// console.log(fibonacci1(10))
// console.log(fibonacci1(32))
console.log(fibonacci1(64))
console.timeEnd()