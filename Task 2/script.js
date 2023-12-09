"use strict";
console.log("script.js file was loaded");

/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const els = {
  btnEl1: document.getElementById("btn__element"),
  btnEl2: document.getElementById("btn__state"),
};
// console.log("btnEl1 ===", els.btnEl1);
// console.log("btnEl2 ===", els.btnEl2);

let clickCount = 0;

els.btnEl1.addEventListener("click", function (event) {
  event.preventDefault();
  const result = clickCount++;
  els.btnEl2.textContent = clickCount;
  // console.log("result ===", result);
});
