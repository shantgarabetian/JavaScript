// JavaScript File
alert("Pick a number greater than zero and we will count even numbers to it!");
var userNumber = prompt("Please Enter a value", "");
for (var i = 1; i < userNumber; i++) {
    if (i == 1)
        document.write(i + " ");
    if ((i % 2) == 0)
        document.write(i + ' ');
}