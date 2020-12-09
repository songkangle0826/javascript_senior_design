/*
    大O表示法: 一般用大O表示法老描述复杂度，它表示的式数据规模n对应的复杂度
    - 忽略常数，系数，低阶
    9               >> O(1)
    2n+3            >> O(n)
    n^2 + 2n + 6    >> O(n^2)
    4n^3 + 3n^3 +   >> O(n^3)
    n^n + n^(n-1)   >> O(n^n)
    log2(n)         >> O(logn)
    nlog2(n)        >> O(nlogn);
*/

/*
    log2(n) = log2(9) * log9(n);
    所以log2(n)和log9(n)皆为O(logn)
*/

// 复杂读大小：
// O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)


// 算法优化
/*
- 用尽量少的存储空间
- 根据情况，可以
- 时间换空间
- 空间换时间
*/

{
    function test1(n){
        // 判断不管  1
        if(n>10){
            console.log("n>10")
        }else if(n>5){
            console.log("n>5")
        }else{
            console.log("n<5")
        }
        // 1 + 4 + 4 + 4 
        for(let i = 0;i < 4; i++){
            console.log('test');
        }
        // 14
        // O(1);
    }


    function test2(n){ 
        // 1 + n + n + n  3n
        // 3n+1
        // O(n)
        for(let i = 0;i < n; i++){
            console.log('test'+n)
        }
        // 空间复杂度 O(1);
    }

    function test3(n){
        // 1 + 2n + n(1 + 3n)
        // 3n^2 + 2n + 1
        // O(n^2)
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                console.log("test3")
            }
        }
    }

    function test4(n){
        // 1 + 2n + n(1+45);
        // 48n + 1;
        // O(n)
        for(let i = 0; i < n; i++){
            for(let j = 0; j < 15; j++){
                console.log('test4')
            }
        }
    }

    function test5(n){
        // 8 = 2 ^ 3;
        // 16 = 2 ^ 4;
        // 4 = log2(16);
        // 3 = log2(8);

        // 执行次数 = log2(n);
        while((n = n / 2) > 0){
            console.log("test5")
        }
    }

    function test6(n){
        // 执次数 = log5(n)
        while((n = n / 5) > 0){
            console.log("test")
        }
    }

    function test7(n){
        // i += i; => i = i*2;
        // 1 + log2(n);
        // 1 + 2*log2(n) + log2(n) * (1+3n);
        // 1 + 3*log2(n) + 3nlog2(n)
        // O(nlogn)
        for(let i = 1;i < n; i += i){
            // 1 + 3n
            for(let j = 0;j < n;j++){
                console.log(test);
            }
        }
    }

    function test10(){
        let a = 10;
        let b = 20;
        let [] = new Array(n);
    }

}