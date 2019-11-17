//The Number Data Type
function numdtyp()
{
    let a:number=undefined;//Error in older versions not in new
    let b:number=null;//error in older versions not in new
    let c:number=3;
    let d:number=0b111001;//binary
    let e:number=0o436;//octal
    let f:number=0xadf0d;//hexa decimal
    //Not allowed Type '"cat"' is not assignable to type
    //    let g:number="cat";//error in all versions

}
numdtyp();