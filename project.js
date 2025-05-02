
const array_Object =[

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


];





function login_failed(user,email,pass){

      for(let i = 0; i < user.length; i++){

         if(user[i].email === email && user[i].pass === pass){

          return "login"


         }



      }
      
  return "faild"



};
//const Login_Faild = login_failed(array_Object,"badol@gmail.com","1234");
//console.log(Login_Faild);





function ShowAllUser(user){

    const all_user = user
    return all_user;

};
//const All_User = ShowAllUser(array_Object);
//console.log(All_User);





function GetOneUser(user,i){


    const get_user = user[i];
    return get_user;



};
//const One_User = GetOneUser(array_Object,1);
//console.log(One_User)





function deleteUser(user){

user.pop();
return user;


};
//const Delete_User = deleteUser(array_Object);
//console.log(Delete_User);




function allFunctionUse(option){


   switch (option) {
    
       case 1:
        
            const Login_Faild = login_failed(array_Object,"badol@gmail.com","1234");
            console.log(Login_Faild);
        

        break;
               
             case 2:

                  const All_User = ShowAllUser(array_Object);
                  console.log(All_User);
                  
               
               break;



                      case 3:
                           
                             const One_User = GetOneUser(array_Object,1);
                             console.log(One_User);
                          

                         break;
                         
                              

                                case 4:
                                       

                                      const Delete_User = deleteUser(array_Object);
                                       console.log(Delete_User);


                                    break;
                                       

        
    default:
        break;
   }








}
const All_Function = allFunctionUse(1);