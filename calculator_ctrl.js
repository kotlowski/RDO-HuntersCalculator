 /*Functionality for the Hunter's Calculator
  *Author: Ty Kotlowski
  *Start Date: 10.15.19
  */


/* buckCtrl Class */
var BBA = document.getElementById('buckButtonAdd');
var BBS = document.getElementById('buckButtonSub');
var BA = document.getElementById('buckAmount');

var count = BA.value;

function add() {
  count++;
  BA.value = count;
  //Show Total Value $$$
  document.getElementById('buckTotalProfit').innerHTML = '$'+(BA.value * 5);
}

function sub() {
  count--;
  BA.value = count;
  //Show Total Value $$$
  document.getElementById('buckTotalProfit').innerHTML = '$'+(BA.value * 5);
}
