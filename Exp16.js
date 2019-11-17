var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + "is string");
    }
};
func(12);
func("Tom");
//Optional braces for a single statement ,emoty parenthesis for no parameetrs 
var disp = function () { console.log("Function invoked"); };
disp();
//optional parenthesis for a single paramaeter
var disp1 = function (x) {
    console.log("The function got" + x);
};
disp1(12);
