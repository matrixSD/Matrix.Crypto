/*global console, alert, prompt*/
// On Change Example

var myInput = document.getElementById("input"),
  myDiv = document.getElementById("div"),
  myCurrency = document.getElementById("currency");
  //add event listeners like this,  and dont forget to add the script tag as the last element before closing the body tag

var refresh = function () {
  "use strict";
  var values = {
    Ruble: 6.5,
    USD: 466,
    USDT:460
  }

  var result = myInput.value * values[myCurrency.value]
  if (!Number.isNaN(result)) {
    myDiv.innerHTML = "Worth " + result + " SDG Pounds";
    return;
  }
  myDiv.innerHTML = "<span style=\"color:red\"> please enter a valid number</span>"

};


myCurrency.addEventListener("change", refresh);
myInput.addEventListener('keyup', refresh);

