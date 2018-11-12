"use-strict";

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');

var d = document.getElementById("date").innerText;
/*store h1 innertext */

var originaltext = document.getElementById("date").innerText;

function showDate(){
  /*new date value is stored in d */
  let d = new Date(getDate.value);
  alert((d.getDate() + 1) + '/' + d.getMonth() + '/' +  d.getFullYear());
  d.toDateString(); /*make date human readable */

/* add original text and date and display them*/
  a = (`${originaltext}` + " " + `${d}`);
   document.getElementById("date").innerText = a;
   console.log(a);
}
getDate.addEventListener("change", showDate);
