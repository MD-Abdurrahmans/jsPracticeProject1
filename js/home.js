document.getElementById("depositBtn").addEventListener("click",function(){

  const depositField= document.getElementById("DepositField");
   
  const NewDepositString=depositField.value; 
  const NewDepositAmount=parseFloat(NewDepositString); //passing the number from input

 const depositTotalElement = document.getElementById("deposit"); //text Where show total number

 const preDepositString =depositTotalElement.innerText; //midbox where 2 element value combined 
 const preDepositNumber=parseFloat(preDepositString);   
const currentDepositTotal=preDepositNumber +NewDepositAmount;
depositTotalElement.innerText =currentDepositTotal;
depositField.value="";

// deposit end

// start balance

const balance= document.getElementById("balance");
const balanceString=balance.innerText;
const balanceNumber=parseFloat(balanceString);



const currentBalanceAmmount=balanceNumber+NewDepositAmount;

balance.innerHTML=currentBalanceAmmount;

// balance end


})




// withdraw start



document.getElementById("withdrawBtn").addEventListener("click",function(){
   

    let withdrawField=document.getElementById("withdrawField");
    const withdrawString=withdrawField.value;
    const NewWithdrawNumber=parseFloat(withdrawString);


    let withdrawTextPlace= document.getElementById("withdrow");
    const withdrawTextPlaceString=withdrawTextPlace.innerText;
    let withdrawTextPlaceNumber=parseFloat(withdrawTextPlaceString);

    let currentTotalWithdraw= withdrawTextPlaceNumber + NewWithdrawNumber;
    const wBalance=document.getElementById("balance");
    const wBalanceString=wBalance.innerText;
    const wBalanceNumber=parseFloat(wBalanceString);

      
    
    // console.log( typeof currentTotalWithdraw)
    

    // balance minus input withdraw 

   
          

  if(NewWithdrawNumber > wBalanceNumber){
    withdrawField.value="";
   alert("you have not enough money")
    return;
}else{
    withdrawTextPlace.innerText=currentTotalWithdraw;
    withdrawField.value="";
    const currentWBalance=wBalanceNumber - NewWithdrawNumber;
      
    wBalance.innerText=currentWBalance;
  
    console.log("done")
}
    // console.log(wBalanceNumber);

    // console.log(NewWithdrawNumber);
    // console.log(currentWBalance);
  
})
