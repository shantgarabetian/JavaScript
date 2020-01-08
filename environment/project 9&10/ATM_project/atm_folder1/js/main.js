/*jslint browser:true */
/*"use strict";*/

$(document).ready(function() {
    //set intial balance to 1000.
    var totalBal = 1000;
    //deposit function.
    function CalculateDeposit() {
        var depositVal = parseFloat($('#deposit').val());
        //validation for empty input plus positive value.
        if (($('#deposit').val().length == 0) || (depositVal <= 0)) {
            alert('Please input a positive number.');
            depositVal = "";
        }
        else {
            totalBal = depositVal + totalBal;
            //alert(totalBal);
            feedback();
        }
    }
    function CalculateWithdraw() {
        var withdrawVal = parseFloat($('#withdraw').val());
        //validation for empty input plus positive value.
        if (($('#withdraw').val().length == 0) || (withdrawVal <= 0)) {
            alert('Please input a positive number.');
            withdrawVal = "";
        }
        else {
            if (withdrawVal > totalBal) {
                alert('The amount is higher than your balance.');
                withdrawVal = "";
            }
            else {
                totalBal = totalBal - withdrawVal;
                //alert(totalBal);
            }
        }
        feedback();
    }
    function feedback() {
        var feedback = "";
        feedback += "Dear Customer ";
        feedback += "Your Total Balance is : $" + totalBal + ".";
        $('#feedback').text(feedback);
    }
    $('#clickDeposit').click(function(event) {
        //stop the defaut button work.
        event.preventDefault();
        CalculateDeposit();
    });
    $('#clickWithdraw').click(function(event) {
        event.preventDefault();
        CalculateWithdraw();
    });
    $('#clickButton').click(function(event) {
        event.preventDefault();
        feedback();
    });
});
