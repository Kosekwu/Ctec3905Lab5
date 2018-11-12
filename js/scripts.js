"use-strict";

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');

var d = document.getElementById("date").innerText;
/*store inner date in x */

function showDate(){/*new date value is stored in d */
  let d = new Date(getDate.value);

  d.toDateString(); /*make date human readable */
  console.log(d);
}
getDate.addEventListener("change", showDate);

console.log(d);
