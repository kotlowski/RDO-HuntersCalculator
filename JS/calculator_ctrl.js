 /*Functionality for the Hunter's Calculator
  *Author: Ty Kotlowski
  *Start Date: 10.15.19
  */


// Get amount of 'buck's killed, and set count
var buckNum = document.getElementById('buckNum');
var buckCount = buckNum.value;
var buckValue = 3.25;

// Get amount of 'elk's killed, and set count
var deerNum = document.getElementById('deerNum');
var deerCount = deerNum.value;
var deerValue = 2.25;

// Get amount of 'buck's killed, and set count
var boarNum = document.getElementById('boarNum');
var boarCount = boarNum.value;
var boarValue = 2.10;

// Get amount of 'elk's killed, and set count
var elkNum = document.getElementById('elkNum');
var elkCount = elkNum.value;
var elkValue = 6.5;


//Buck Functionality
function addBuck() {
  buckCount++;
  buckNum.value = buckCount;
  //Show Total Value $$$
  document.getElementById('buckTotalProfit').innerHTML = '$'+(buckNum.value * buckValue);
}

function subBuck() {
  buckCount--;
  buckNum.value = buckCount;
  //Show Total Value $$$
  document.getElementById('buckTotalProfit').innerHTML = '$'+(buckNum.value * buckValue);
}

//Deer Functionality
function addDeer() {
  deerCount++;
  deerNum.value = deerCount;
  //Show Total Value $$$
  document.getElementById('deerTotalProfit').innerHTML = '$'+(deerNum.value * deerValue);
}

function subDeer() {
  deerCount--;
  deerNum.value = deerCount;
  //Show Total Value $$$
  document.getElementById('deerTotalProfit').innerHTML = '$'+(deerNum.value * deerValue);
}

//Elk Functionality
function addElk() {
  elkCount++;
  elkNum.value = elkCount;
  //Show Total Value $$$
  document.getElementById('elkTotalProfit').innerHTML = '$'+(elkNum.value * elkValue);
}

function subElk() {
  elkCount--;
  elkNum.value = elkCount;
  //Show Total Value $$$
  document.getElementById('elkTotalProfit').innerHTML = '$'+(elkNum.value * elkValue);
}

//Elk Functionality
function addBoar() {
  boarCount++;
  boarNum.value = boarCount;
  //Show Total Value $$$
  document.getElementById('boarTotalProfit').innerHTML = '$'+(boarNum.value * boarValue);
}

function subBoar() {
  boarCount--;
  boarNum.value = boarCount;
  //Show Total Value $$$
  document.getElementById('boarTotalProfit').innerHTML = '$'+(boarNum.value * boarValue);
}
