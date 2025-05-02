//...............................
const num1 = 10;
const num2 = 20;


function add(x,y){

    return x + y;

};
const add_Result = add(num1,num2);
//console.log(add_Result);

const num3 = 10

function sub(x,y){

return x - y;

};
const sub_Result = sub(add_Result,num3);
//console.log(sub_Result);



const num4 = 10;


function mul(x,y){

return x * y;

}
const mul_Result = mul(sub_Result,num4);
//console.log(mul_Result);



const num5  = 200;


function divi(x,y){

return x / y;


}
const divi_Result = divi(mul_Result,num5);
//console.log(divi_Result);