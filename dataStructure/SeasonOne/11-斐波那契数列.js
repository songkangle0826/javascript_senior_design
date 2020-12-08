/*
    斐波那契数列：
    斐波那契数列指的是这样一个数列：1 1 2 3 5 8 13 21 34
*/

// 求第n个斐波那契数

// 第一种解法： 递归
console.time()
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

// console.log(fibonacci1(1))
// console.log(fibonacci1(2))
// console.log(fibonacci1(3))
// console.log(fibonacci1(4))
// console.log(fibonacci1(5))
// console.log(fibonacci1(10))
// console.log(fibonacci1(32))
console.log(fibonacci1(64))
console.timeEnd()