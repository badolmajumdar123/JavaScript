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








const object_key = Object.keys(array_Object);
//console.log(object_key);



const object_value = Object.values(array_Object);
//console.log(object_value);



