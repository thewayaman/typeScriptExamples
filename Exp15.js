//anonympus recursion
function factorial(number) {
    if (number <= 0) { //termination case
        return 1;
    }
    else {
        return (number * factorial(number - 1)); //function invokes self
    }
}
;
console.log(factorial(6));
(function () { var x = "hello!!"; console.log(x); })();
