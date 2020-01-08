// JavaScript File
//random number gen.
var Trys = 2;
var counter=0;

//random gen.
var ranNumber = Math.floor((Math.random() * 10) + 1);

while(Guess != ranNumber)
{
   var Guess = prompt("Guess your first number, must be bwtween 1 & 10");
    counter+=1;
    
    if(counter > Trys)
    {
        document.write("that was your last try! No more trys");
        document.write("the random number was "+ranNumber);
    break;
    }
    
    if (Guess == ranNumber)
    {
    document.write("you got the right number!!!"+ ranNumber + " was the answer!!!");
        
    }
} 


    
     
     
     
     
    
        
   
    
    