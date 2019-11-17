//The scope of a JavaScript variable declared outside the function is global
var a = 2300;
function varExam() {
    //Variable declarations are processed before the execution of the code
    var a = 10;
    console.log("Local to funtion=>" + a); //output 10
    if (true) {
        //The re-declarations scope of a JavaScript variable declared with var is its current execution context.
        var a = 20;
        console.log("Local to funtion=>" + a); //output 20
    }
    var a = 30; //throws syntax error
    console.log("Local to funtion after re declaration=>" + a); //output 20
}
varExam();
console.log("Global Scope=>" + a);
