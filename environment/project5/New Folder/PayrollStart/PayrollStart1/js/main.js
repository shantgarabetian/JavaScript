/*jslint browser:true */
/*"use strict";*/

//hourly wages = $10
var hourly_wages = 10;


function calculate_total_hours() {
   var total_hours=0;
    var foundYou = document.getElementsByTagName('input');
    for (var i = 0; i < foundYou.length; i++) {
        var x = parseFloat(foundYou[i].value);
        console.log(x);
        total_hours = total_hours + x;
    }
    console.log(total_hours);
    return total_hours;
}

function get_selected_tax() {
    var elm = document.getElementById('panel');
     var selected_tax = parseFloat(elm.options[elm.selectedIndex].value);
    console.log(selected_tax);
    return selected_tax;
}

function calculate_net() {
    var weekly_pay = calculate_total_hours() * hourly_wages;
    var tax_amount = weekly_pay * get_selected_tax();
    console.log(weekly_pay);
    console.log(tax_amount);
    var weekly_pay_net = weekly_pay - tax_amount;
    console.log(weekly_pay_net);


        
        var feedback="";
            feedback+="<p>My Name is Shant Jameel</p>";
            feedback+="<p>Total Hours are : "+ calculate_total_hours() + " hrs.</p>";
            feedback+="<p>The Tax Amount is $"+ tax_amount+".</p>";
            feedback+=" <p>The Net Pay is $"+weekly_pay_net+".</p>";
            
                document.getElementById('feedback').innerHTML = feedback;
}
function pay(){
    calculate_net();

}
