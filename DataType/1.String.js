//String ---

const first_Name = "Badol";
const middle_Name = "Kumar";
const last_Name = "Majumdar";

//console.log(first_Name);
//console.log(typeof first_Name);    //typeof = String;



//Add String ---

const full_Name1 = first_Name + " " + middle_Name + " " + last_Name;
//console.log(full_Name1);

const full_Name2 = `${first_Name} ${middle_Name} ${last_Name}`;
//console.log(full_Name2);

const name = "Badol" + " Majmdar"
//console.log(name)


//String Methods---

const a = "1111";
const b = "2222";
const c = "3333";


//1.concat();

const concat_Method = a.concat(b).concat(c);
//console.log(abc);


//2.trim();

const one_Sentence1 = " He Is a Good boy ";
//console.log(one_Sentence1.length);
const trim_Method = one_Sentence1.trim();
//console.log(trim_Method.length);


//3.trimEnd();

const one_Sentence2 = "He Is a Good boy ";
//console.log(one_Sentence2.length);
const  trim_End = one_Sentence2.trimEnd();
// console.log(trim_End.length);


//4.trimStart();

const one_Sentence3 = " He Is a Good boy";
//console.log(one_Sentence3.length);
const trim_Start = one_Sentence3.trimStart();
//console.log(trim_Start.length)


//5.repeat();

const one_Sentence4 = "He Is a Good boy";
const repeat_Method = one_Sentence4.repeat(6);
//console.log(repeat_Method);


//6.split();

const one_Sentence5 = "He Is a Good boy";
const split_Method1 = one_Sentence5.split();
//console.log(split_Method1);
const split_Method2 = one_Sentence5.split("");
//console.log(split_Method2);
const split_Method3 = one_Sentence5.split(" ");
//console.log(split_Method3);


//7.slice();

const one_Sentence6 = "He Is a Good boy";
const splice_Method = one_Sentence6.slice(2,5);
//console.log(splice_Method);



//8.toLowerCase();

const one_Sentence7 =  "He Is a Good boy";
const tolowercase_method = one_Sentence7.toLowerCase();
//console.log(tolowercase_method);


//9.toUpperCase();


const one_Sentence8 =  "He Is a Good boy";
const touppercase_method = one_Sentence8.toUpperCase();
//console.log(touppercase_method);


//10.toLocaleLowerCase();

const one_Sentence9 =  "He Is a Good boy";
const tolocalelowercase_method = one_Sentence9.toLocaleLowerCase();
//console.log(tolocalelowercase_method);


//11.toLocaleUppercase();


const one_Sentence10 =  "He Is a Good boy";
const tolocaleuppercase_method = one_Sentence10.toLocaleUpperCase();
//console.log(tolocaleuppercase_method);


//12.replace();

const one_Sentence11 =  "He Is a Good boy";
const replace_method = one_Sentence11.replace("Is","Are");
//console.log(replace_method);



//13.replaceAll();

const one_Sentence12 =  "He Is a Good boy";
const replaceall_method = one_Sentence12.replaceAll("He Is a Good boy","He Is A Bad Boy");
//console.log(replaceall_method);



//14.indexOf();


const one_Sentence13 =  "He Is a Good boy";
const indexoff_method = one_Sentence13.indexOf("G");
//console.log(indexoff_method);


//15.search();


const one_Sentence14 =  "He Is a Good boy";
const search_method = one_Sentence14.search("I");
//console.log(search_method);



//16.padStart();


const one_Sentence15 =  "He Is a Good boy";
const padstart_method = one_Sentence15.padStart();
//console.log(padstart_method);



//17.padEnd();


const one_Sentence16 =  "He Is a Good boy";
const padend_method = one_Sentence16.padEnd();
//console.log(padend_method);


//18.lastIndexOf();


const one_Sentence17 =  "He Is a Good boy";
const lastindexoff_method = one_Sentence17.lastIndexOf("o");
//console.log(lastindexoff_method);


//19.at();

const one_Sentence18 =  "He Is a Good boy";
const at_method = one_Sentence18.at(8);
//console.log(at_method);



//20.charAt();


const one_Sentence19 =  "He Is a Good boy";
const charat_method = one_Sentence19.charAt(11);
//console.log(charat_method);



//21.charCodeAt();



const one_Sentence20 =  "He Is a Good boy";
const charcodeat_method = one_Sentence20.charCodeAt("b");
//console.log(charcodeat_method);




//22.codePointAt();



const one_Sentence21 =  "He Is a Good boy";
const charpointat_method = one_Sentence21.codePointAt("e");
//console.log(charpointat_method)



//23.match();


const one_Sentence22 =  "He Is a Good boy";
const match_method = one_Sentence22.match("Good");
//console.log(match_method);



//24.matchAll();


const one_Sentence23 =  "He Is a Good boy";
const matchall_method = one_Sentence23.matchAll("Good");
//console.log(matchall_method);



//25.endsWith();


const one_Sentence24 =  "He Is a Good boy";
const endswith_method = one_Sentence24.endsWith("boy");
//console.log(endswith_method);



//26.startWith();



const one_Sentence25 =  "He Is a Good boy";
const startwith_method = one_Sentence25.startsWith("He");
//console.log(startwith_method);



//27.includes();

const one_Sentence26 =  "He Is a Good boy";
const includes_method = one_Sentence26.includes("Good");
//console.log(includes_method);



//28.subString();


const one_Sentence27 =  "He Is a Good boy";
const substring_method = one_Sentence27.substring(2,6);
//console.log(substring_method);



//29.toString();

const num1 = 1233;
//console.log(typeof num1);
const tostring_method = num1.toString();
//console.log(tostring_method)
//console.log(typeof tostring_method)

