//Define only once
const a=2300;
function varExam(){
    const a=10;
    console.log("Local to function=>"+a);
    if(true){
        const a=20;
        console.log("Not local to block=>"+a);
    }
    //const a=100; //cannot re declare block variable
    //a=100;//re assign is not allowed
    console.log("local to funtion=>"+a);

}
varExam();
console.log("Global Scope=>" + a);//output2300