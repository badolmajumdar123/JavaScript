//1.length;

const my_Array1 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const length_Array = my_Array1.length;
//console.log(length_Array);


//2.push();


const my_Array2 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
my_Array2.push("Komol");
my_Array2.push("Hiramon")
//console.log(my_Array2)



//3.pop();

const my_Array3 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
my_Array3.pop();
my_Array3.pop();
//console.log(my_Array3);



//4.unshift();

const my_Array4 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
my_Array4.unshift("Komol");
my_Array4.unshift("Hiramon");
//console.log(my_Array4);



//5.shift();


const my_Array5 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
my_Array5.shift();
my_Array5.shift();
//console.log(my_Array5);



//6.splice();


const my_Array6 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const splice_method = my_Array6.splice(0,1);
//console.log(splice_method);



//7.slice();


const my_Array7 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const slice_method = my_Array7.slice(2,4);
//console.log(slice_method);




//8.lastIndexOf();


const my_Array8 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const lastindexof_method = my_Array8.lastIndexOf("Chandhan");
//console.log(lastindexof_method);



//9.indexof();


const my_Array9 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const indexof_method = my_Array9.indexOf("Avi");
//console.log(indexof_method);



//10.includes();


const my_Array10 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const includes_method = my_Array10.includes("Joy");
//console.log(includes_method)



//11.reverse();



const my_Array11 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const reverse_method = my_Array11.reverse();
//console.log(reverse_method);



//12.at();


const my_Array12 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const at_method = my_Array12.at(5);
//console.log(reduce_method);






//13.concat();


const my_Array13 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const my_array = ["Ram","Sam","Shiv","komol"];
const concat_method = my_Array13.concat(my_array);
//console.log(concat_method);



//14.spread Oparetor();



const my_array_first = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const my_array_second = ["Ram","Sam","Shiv","komol"];
const spread_Oparetor = [...my_array_first,...my_array_second];
//console.log(spread_Oparetor)




//15.index value access....


const my_array13 = ["Badol","Shomrat","Avi","Monty","Chandhan","Dipto","Joy"];
const index_value = my_Array13[4];
console.log(index_value);




