"use strict";
console.log("script.js file was loaded");
/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const carsUrl = "cars.json";

const els = {
  outputEl: document.getElementById("output"),
  btnEl: document.getElementById("btn"),
};

els.btnEl.addEventListener("click", async () => {
  try {
    const res = await fetch(carsUrl);
    const data = await res.json();
    generateCars(data);
    els.btnEl.style.display = "none";
  } catch (error) {
    console.warn("Ivyko klaida:", error);
  }
});

function generateCars(carData) {
  const ulEl = document.createElement("ul");
  ulEl.classList.add("car-list");

  carData.forEach((car) => {
    const liEl = createCarListItem(car);
    ulEl.append(liEl);
  });

  els.outputEl.append(ulEl);
}

function createCarListItem(car) {
  const liEl = document.createElement("li");
  liEl.classList.add("car-card");

  const brandEl = document.createElement("h2");
  brandEl.textContent = car.brand;
  liEl.append(brandEl);

  car.models.forEach((model) => {
    const modelPEl = document.createElement("p");
    modelPEl.textContent = model;
    liEl.append(modelPEl);
  });

  return liEl;
}
