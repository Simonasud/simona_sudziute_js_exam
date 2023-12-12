"use strict";
console.log("script.js file was loaded");
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const els = {
  formEl: document.getElementById("form1"),
  searchEl: document.getElementById("search"),
  submitEl: document.getElementById("submit-btn"),
  outputEl: document.getElementById("output"),
};
// console.log(" formEl ===", els.formEl);
// console.log("searchEl ===", els.searchEl);
// console.log("submitEl ===", els.submitEl);
// console.log("outputEl ===", els.outputEl);

function sukurtiEl(label, value) {
  const liEl = document.createElement("li");
  const strongEl = document.createElement("strong");
  strongEl.textContent = label + ":";
  liEl.appendChild(strongEl);

  const spanEl = document.createElement("span");
  spanEl.textContent = value.toFixed(2);
  liEl.appendChild(spanEl);

  return liEl;
}

function atvaizduotiRezultatus(svarai, gramai, uncijos) {
  els.outputEl.innerHTML = "";
  els.outputEl.style.display = "block";

  const ulEl = document.createElement("ul");
  ulEl.classList.add("unlisted");

  const svaraiEl = sukurtiEl("Svarai (lb)", svarai);
  const gramaiEl = sukurtiEl("Gramai (g)", gramai);
  const uncijosEl = sukurtiEl("Uncijos (oz)", uncijos);

  ulEl.appendChild(svaraiEl);
  ulEl.appendChild(gramaiEl);
  ulEl.appendChild(uncijosEl);

  els.outputEl.appendChild(ulEl);
}

els.formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchValue = parseFloat(els.searchEl.value);

  if (isNaN(searchValue)) {
    alert("Reikia ivesti skaicius");
    return;
  }

  svorioKonvertavimas(searchValue);
});

function svorioKonvertavimas(searchValue) {
  const svarai = searchValue * 2.2046;
  const gramai = searchValue / 0.001;
  const uncijos = searchValue * 35.274;

  atvaizduotiRezultatus(svarai, gramai, uncijos);

  return { svarai, gramai, uncijos };
}
