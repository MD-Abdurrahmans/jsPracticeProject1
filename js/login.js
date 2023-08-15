
document.getElementById("loginBtn").addEventListener("click",function(){

   let name= document.getElementById("nameField");
   let email= document.getElementById("emailField");

   let nValue=name.value;
   let nEmail=email.value;

    if(nValue ==="ariyan" && nEmail ==="ariyan@gmail.com"){
         
        location.href='home.html';

    }else{
 
        alert("invalid input")
        name.value="";
        email.value="";
        location.href='login.html';
        
    }
})