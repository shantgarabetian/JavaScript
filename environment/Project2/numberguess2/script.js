var count = 0;
var ranNumber = Math.floor((Math.random() * 10) + 1);
do{
   alert("Hi,guess a number between 1 to 10");
   var userNumber =prompt("enter your guess", "");
   var firstGuess = Number(userNumber);
   count=count+1;
   if (firstGuess == ranNumber)
   {
       alert("Great job!!");
	   break;
   }
   else
   {
	 alert("didn't match the one,you can try again!");  
   }
}while(count<3);

    
     
     
     
     
    
        
   
    
    