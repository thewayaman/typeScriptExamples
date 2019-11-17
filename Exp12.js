function deflt(bar, bas) {
    if (bas === void 0) { bas = 'Hello'; }
    console.log(bar, bas);
}
deflt(123); //123,hello
deflt(123, 'world'); //123,world
