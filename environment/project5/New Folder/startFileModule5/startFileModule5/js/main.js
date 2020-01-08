// JavaScript Document
//Shant Jameel
 //BY ID
var FoundYou = document.getElementById('overview');
console.log(FoundYou);
console.log(FoundYou.innerHTML);
FoundYou.innerHTML=">>I changed you<<";


// BY NAME TAG
var foundYou = document.getElementsByTagName('p');
console.log(foundYou);
console.log(foundYou[1].innerHTML);
foundYou[1].innerText=">>..I changed you<<";

//BY NAME
var found_Name = document.getElementsByName('first');
console.log(found_Name);
var Found_You = document.getElementsByName('description');
console.log(Found_You[0].innerText);
Found_You[0].innerText=">>changed you too<<";

// BY CLASS
var foundClass = document.getElementsByClassName('smallCenter');
console.log(foundClass[0].innerHTML);// [0] because it is in array P with one element.
foundClass[0].innerHTML=">>..New Paragraph Info..<<";

//QUERY SELECTOR ALL
var foundQuery = document.querySelectorAll('li');//target li first in list.
console.log(foundQuery[0].innerText);
foundQuery[0].innerText="..<< I Changed You >>..";

//QUERY SELECTOR ALL WITH ID
//foundQuery.length is 1 for ul#fn_list & 6 for ul#fn_list li .
//Exploring Functions
var found_Query = document.querySelectorAll('ul#lp_list li');//target ul# list items.
console.log(found_Query[0].innerText);
console.log('Length Of Collection '+ found_Query.length);
found_Query[2].innerText= "..>> I Changed You <<..";

//Exploring Loops
var found_Query_L = document.querySelectorAll('ul#fn_list li');//target ul# list items.
console.log(found_Query_L[0].innerText);
console.log('Length Of Collection '+ found_Query_L.length);
found_Query_L[5].innerText= "..>> I Changed You <<..";

//Combination 1
var foundArray = document.getElementById('sw_list');
console.log(foundArray);
var ChildArray = foundArray.getElementsByTagName('li');
console.log(ChildArray);
ChildArray[0].innerText="..>> these Iems <<..";
ChildArray[1].innerText="..>> Have Just <<..";
ChildArray[2].innerText="..>> Been Changed. <<..";

//Combination 2
//ARRAY CHANGE
var newOption = ["Orange","Blue","Red"];
var foundMe = document.getElementById('myForm');
console.log(foundMe);
var selectArray = foundMe.getElementsByTagName('option');
console.log(selectArray);

for(var i=0; i<selectArray.length; i++){
    selectArray[i].innerText=newOption[i];
}

//Combination 3
var found_You = document.getElementById('myForm');
console.log(found_You);
var select_Array = found_You.getElementsByTagName('input');
console.log(select_Array);
for(var j=0; j<select_Array.length;j++){
 console.log(select_Array[j].value);   
}















