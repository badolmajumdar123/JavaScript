const my_Object = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};




const my_Object1 = my_Object["name"];
const my_Object2 = my_Object.name;




//1.key value change......

const my_Object3 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};


my_Object3.name = "Somrat Biswas";
my_Object3.email = "somratbiswas@gmail.com";
//console.log(my_Object3);

my_Object3["name"] = "Rudra Barmon";
my_Object3["email"] = "rudrabarmon@gmail.com";
//console.log(my_Object3);



//2.key and value delete......



const my_Object4 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};


delete my_Object4.name;
delete my_Object4.email;
//console.log(my_Object4);



delete my_Object4["age"];
delete my_Object4["mobile"];
//console.log(my_Object4);




//new key and value include.....................


const my_Object5 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};



my_Object5.game = "Football";
my_Object5.work = "Anything";
//console.log(my_Object5);


my_Object5["district"] = "Siliguri";
my_Object5["class"] = "All";
//console.log(my_Object5);




//just Object key access..........



const my_Object6 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};


 const object_Key = Object.keys(my_Object6);
 //console.log(object_Key);




 //just Object value access............



 const my_Object7 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};


const object_Value = Object.values(my_Object7);
//console.log(object_Value);




// Spread Oparator............


const my_Object8 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};

const my_Object9 = {
    game: "Football",
    class: "All"
}


const object_Spread = {...my_Object8,...my_Object9};
//console.log(object_Spread);





//assign Oparator.......... 

const my_Object10 = {
    name: "Badol Majumdar",
    age: 20,
    city: "Kolkata",
    country: "India",
    mobile: 7001412723,
    email: "badolmajumdar@gmail.com"
};

const my_Object11 = {
    game: "Football",
    class: "All"
};


const my_Object12 = {
    district: "siluguri",
    work: "Anything"
}


const object_Assign = Object.assign(my_Object10,my_Object11,my_Object12);
//console.log(object_Assign);