//utility function
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

//setup timer
console.time('timer');
setTimeout(function () {
    console.timeEnd('timer'); //prints much more than 1000ms
}, 1000)

//start long running operation
fibonacci(44);