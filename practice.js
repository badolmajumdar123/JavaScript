//The numbers from 1 to 100 are divided by both 3 and 5;



for(let i = 0; i <= 100; i++){

  if(i % 3 === 0 && i % 5 === 0){

    //console.log(i);
  }


}



//Write a function will return small numbers from array;



  const my_array = [12,16,10,28,24,14];


function small_Number(arr){

  let min = arr[0];


  for(let i = 0; i < arr.length; i++){
   
     if(arr[i] < min){
  

      min = arr[i];
      

     }


  }
  
  
  return min;

}
const small_number = small_Number(my_array);
//console.log(small_number) 








//write a function will return largest numbers from array;



const max_array = [24,18,80,14,16,20];

function largest_number(arr){
  
  let max = arr[0];
  
       
  for(let i = 0; i < arr.length; i++){

     if(arr[i] > max){

   max = arr[i];


     }

}
return max;

}
const largest_Number = largest_number(max_array);
//console.log(largest_Number);





//Write a function will return the new array to match numbers from two array....




const first_Array = [12,28,18,14,20,22];

const second_Array = [24,34,20,30,40,12];



function match_Number(arr1,arr2){

  let new_array = [];
 for(let i = 0; i < arr1.length; i++){
    
  
    if(arr2.includes(arr1[i])){

        new_array.push(arr1[i]);

    }

 };


return new_array;


}
const common_number = match_Number(first_Array,second_Array);
//console.log(common_number)












//Write a function will return the odd number from an array.......



const array1 = [12,13,19,25,14,64,40,21,17];



function odd_number(arr){

  const new_array = [];
 
  for(let i = 0; i < arr.length; i++){


   if(arr[i] % 2 === 1){
   
    new_array.push(arr[i]);

   }

  }
return new_array;



}
const odd_Number = odd_number(array1);
//console.log(odd_Number);












//write a function will return the even number from array.............


const array2 = [40,35,50,47,22,25,26];



function even_number(arr){

     let new_array = [];

     for(let i = 0; i < arr.length; i++){

      if(arr[i] % 2 === 0){

        new_array.push(arr[i]);

      }

     }

   return new_array;

}
const even_Number = even_number(array2);
//console.log(even_Number)


















//string reversed use loop and reverse()..........................



//loop.........


const name = "badol";

for(let i = name.length; i >= 0; i--){

 //console.log(name[i]);

};




const name_reverse = name.split("").reverse().join(" ");

//console.log(name_reverse)







//use array and object .........................................





const array_Object = [

      {

        id:1,
        name: "Badol Majumdar",
        age:20,
        mobile: "70014127",
        email: "badol@gmail.com",
        pass: "1234"
        
      },

      {
        
        id:2,
        name: "Somrat Biswas",
        age:23,
        mobile: "700141272",
        email: "somrat@gmail.com",
        pass: "12343"
        
      },
      {
        
        id:3,
        name: "Avi",
        age:24,
        mobile: "7001412",
        email: "avi@gmail.com",
        pass: "12344"
        
      },
      {
        
        id:4,
        name: "Joy",
        age:20,
        mobile: "700146545",
        email: "joy@gmail.com",
        pass: "1234434"
        
      },
      {
        
        id:5,
        name: "Chinmoy Goshal",
        age:27,
        mobile: "700141235",
        email: "chinmoy@gmail.com",
        pass: "123445"
        
      },
      {
        
        id:6,
        name: "Amit Biswas",
        age:29,
        mobile: "70014127343",
        email: "amit@gmail.com",
        pass: "12346"
        
      },
      {
        
        id:7,
        name: "Monty Vowmic",
        age:26,
        mobile: "7001412747",
        email: "monty@gmail.com",
        pass: "123423"
        
      },
      {
        
        id:8,
        name: "Chadhan Roy",
        age:25,
        mobile: "700141704",
        email: "chandhan@gmail.com",
        pass: "123445"
        
      },
      {
        
        id:9,
        name: "Palash Roy",
        age:28,
        mobile: "70014127053",
        email: "palash@gmail.com",
        pass: "12343243"
        
      },
      {
        
        id:10,
        name: "Piranto Biswas",
        age:27,
        mobile: "70014127277",
        email: "piranto@gmail.com",
        pass: "1234"
        
      },
      {
        
        id:11,
        name: "Partho Paramano",
        age:20,
        mobile: "700141266",
        email: "partho@gmail.com",
        pass: "1234223"
        
      },
      {
        
        id:12,
        name: "Dipto Biswas",
        age:25,
        mobile: "70014127643",
        email: "dipto@gmail.com",
        pass: "123452"
        
      },
      {
        
        id:13,
        name: "Ciron Biswas",
        age:27,
        mobile: "700141254",
        email: "ciron@gmail.com",
        pass: "123434"
        
      },

      {
        
        id:14,
        name: "Nayon Adhikay",
        age:29,
        mobile: "7001412764",
        email: "nayan@gmail.com",
        pass: "123434"
        
      },
      {
        
        id:15,
        name: "Sudip Mondol",
        age:24,
        mobile: "7001412764",
        email: "sudip@gmail.com",
        pass: "1234343"
        
      },





];





//console.log(array_Object);


//console.log(array_Object[1]);

//console.log(array_Object[0]);



//console.log(array_Object[14]);

const object_name = array_Object[0].name


const object_email = array_Object[4].email

const object_pass = array_Object[7].pass

const object_age = array_Object[14].age
const object_id = array_Object[3].id
const object_mobile = array_Object[8].mobile




//console.log(object_email);

//console.log(object_pass);
//console.log(object_age);
//console.log(object_mobile);




// const object_name = array_Object[0].name


// const object_email = array_Object[4].email

// const object_pass = array_Object[7].pass

// const object_age = array_Object[14].age
// const object_id = array_Object[3].id
// const object_mobile = array_Object[8].mobile



const object_key = Object.keys(array_Object);
//console.log(object_key);



const object_value = Object.values(array_Object);
//console.log(object_value);







// Array map() method ........map return new_Array.



const arr = [2,3,4,5,6,7,8,9];

const a = arr.map((value,index,arr)=>{
 
  //console.log(value,index,arr);
  return value+1;
});


const f = arr.map((value => value + 1));
//console.log(f)

//console.log(a);








//Array filter() method......filter return new_Array.


const arr1 = [12,24,13,19,17,20];


const b = arr1.filter((value) => {

return value < 17;

});
//console.log(b);



const r = arr1.filter((value => value >= 17));
//console.log(r)






//Array reduce() method...........reduce return just new_value.


const arr2 = [30,10,26,24,13,25,17,19];


const c = arr2.reduce((value1,value2) => {

return value1+value2;

});
//console.log(c);





//Array find()  method........return first value




const arr3 = [7,5,9,8,2,6,3];


const d = arr3.find((value) =>{
   
  return value > 7;

});

//console.log(d)




//Array findIndex() method ....return index value


const arr4 = [4,5,6,7,8,9];

const e = arr4.findIndex((value) => {

     return value < 7;

});
//console.log(e)





//Array Object.............



const arrayUserObject = [

  {

    id:1,
    name: "Badol Majumdar",
    age:20,
    mobile: "70014127",
    email: "badol@gmail.com",
    pass: "1234"
    
  },

  {
    
    id:2,
    name: "Somrat Biswas",
    age:23,
    mobile: "700141272",
    email: "somrat@gmail.com",
    pass: "12343"
    
  },
  {
    
    id:3,
    name: "Avi",
    age:24,
    mobile: "7001412",
    email: "avi@gmail.com",
    pass: "12344"
    
  },
  {
    
    id:4,
    name: "Joy",
    age:20,
    mobile: "700146545",
    email: "joy@gmail.com",
    pass: "1234434"
    
  },


];



const returnuser1 = arrayUserObject.find((value => value.id > 2));
const returnuser2 = arrayUserObject.findIndex((value => value.id > 2));


//console.log(returnuser1);
//console.log(returnuser2);




const math_max = Math.max(2,5,7,2,9,5);
//console.log(math_max);

const math_min = Math.min(2,3,5,6,9,4);
//console.log(math_min);


const math_floor = Math.floor(4.4);
//console.log(math_floor);



const math_PI = Math.PI;
//console.log(math_PI);


const math_round = Math.round(5.6);
//console.log(math_round);


const math_cile = Math.ceil(5.1);
//console.log(math_cile)


const math_abs = Math.abs(-10);
//console.log(math_abs)




const math_random = Math.random();
//console.log(math_random)


const OTP = Math.floor(100000+Math.random()*900000);

//console.log(OTP)


const otp = Math.floor(1000000000+Math.random()*9000000000);
//console.log(otp)


//console.log((1000+0.2344)*90000)




// const math_random = Math.random();
// //console.log(math_random)


// const OTP = Math.floor(100000+Math.random()*900000);

// //console.log(OTP)


// const otp = Math.floor(1000000000+Math.random()*9000000000);
// //console.log(otp)


// //console.log((1000+0.2344)*90000)
