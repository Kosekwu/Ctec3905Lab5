"use-strict";

//DATE
const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');
var d = document.getElementById("date").innerText;
/*store h1 innertext */

var originaltext = document.getElementById("date").innerText;

function showDate(){
  /*new date value is stored in d */
  let d = new Date(getDate.value);
  /*make date human readable - My solution: d.toDateString(); included greenich time stamp */
  //solution only the date. I needed to refernce innerText
  theDate.innerText = d.toDateString();

/* add original text and date and display them
  a = (`${originaltext}` + " " + `${d}`);
   document.getElementById("date").innerText = a;
   console.log(a);*/
}
getDate.addEventListener("change", showDate);


//COLOUR
const colour = document.getElementById("color");
const value = document.getElementById("the-value");

function setColor(){
let aa =  value.style.backgroundColor = colour.value;

}
theForm.addEventListener("input", setColor);

//RANGE
const Range = document.getElementById("range");

function rangeAction(){
let r = Range.value;
let runit = `${r}%`;
value.style.width = runit;
value.innerText = runit;
}
Range.addEventListener("input", rangeAction);
/*function rangeAction{

}
Range.addEventListener("input", rangeAction);*/
