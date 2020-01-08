// JavaScript File
var hours;
var payperhour;
var grosspay_amount;
var emp_tax;
var int_bal = 1000;
var amount;
var cash_out;
var balance=int_bal;

function input(){
  hours = document.getElementById("hours").value;
  payperhour = document.getElementById("payperhour").value;
 alert('grosspay is $' + grosspay(hours,payperhour));
}

function grosspay(hours, payperhour) {
var overtime_amount = 0;
 if (hours > 40) {
  overtime_amount = overtime();
 }
  grosspay_amount = (hours * payperhour)+ overtime_amount;
  return grosspay_amount;
}

function overtime() {
 return ((hours - 40) * 1.5)* payperhour;
}

function single() {
  emp_tax = (grosspay_amount * 0.22);
}

function family() {
  emp_tax = (grosspay_amount * 0.18);
}

function netpay(grosspay_amount, emp_tax) {
 return grosspay_amount - emp_tax;

}
function print_netpay(){
if  (document.getElementById("single").checked){
 single();
}
if (document.getElementById("family").checked){
 family();
}
 alert("net pay is $"+ netpay(grosspay_amount,emp_tax));
}
function balanceCheck() {
 alert("Your intial balance is $"+balance);
}
function print_deposit(){
 amount = document.getElementById("amount").value;
 alert('total amount is $'+deposit(amount));
}
function print_withdraw(){
 cash_out = document.getElementById("cash_withdraw").value;
  if (cash_out>balance){
  alert("the amount is larger than your balance.");
 }
 else
 alert('total amount is $'+withdraw(amount));
}
function deposit(amount) {
  balance = balance +parseInt(amount);
  return balance;
}
function withdraw(amount) {
 balance= balance -parseInt(cash_out);
 return balance;
}
