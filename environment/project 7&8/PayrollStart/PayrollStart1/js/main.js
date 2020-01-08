/*jslint browser:true */
/*"use strict";*/
$(document).ready(function() {

    //hourly wages = $10
    var hourly_wages = 10;

    //replacing js elements by tag with jquery selector and the for loop with .each
    function calculate_total_hours() {
        var total_hours = 0;
        $('input').each(function() {
            var x = parseFloat($(this).val());
            total_hours = total_hours + x;
        });
        return total_hours;
    }
    // replacing getelementbyid with jquery id selector 
    function get_selected_tax(){
        var selected_tax = $('#panel').val();
        return selected_tax;
    }
    function calculate_net() {
        var weekly_pay = calculate_total_hours() * hourly_wages;
        var tax_amount = weekly_pay * get_selected_tax();
        console.log(weekly_pay);
        console.log(tax_amount);
        var weekly_pay_net = weekly_pay - tax_amount;
        console.log(weekly_pay_net);

        var feedback = "";
        feedback += "<p>Dear Customer</p>";
        feedback += "<p>Total Hours are : " + calculate_total_hours() + " hrs.</p>";
        feedback += "<p>The Tax Amount is $" + tax_amount + ".</p>";
        feedback += " <p>The Net Pay is $" + weekly_pay_net + ".</p>";

        //removing getElementById feedbak with  jquery selector
        //document.getElementById('feedback').innerHTML = feedback;

        $('#feedback').html(feedback);
    }

    //using event handler instad of uning onclick property in html.
    $('#clickButton').click(function() {
        calculate_net();
    });

});
