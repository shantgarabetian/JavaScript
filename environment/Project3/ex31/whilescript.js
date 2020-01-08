// JavaScript File
alert("Pick a number greater than zero and we will count backwards from it!");
  var userNumber =prompt("Enter your number", "");
  var text = "";
  
  while (userNumber > 0) {
        if (userNumber == 1)
              {
              text = text + userNumber;
              break;
              }
    text = text + userNumber + ", ";
    userNumber--;
  }
    alert(text);

