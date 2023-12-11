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
  ulEl: document.createElement("ul"),
};

els.outputEl.append(els.ulEl);

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

function generateCars(data) {
  data.forEach((car) => {
    const liEl = createCarListItem(car);
    els.ulEl.append(liEl);
  });
}

function createCarListItem(car) {
  const liEl = document.createElement("li");
  liEl.classList.add("car-card");

  const brandEl = createBrandElement(car.brand);
  liEl.append(brandEl);

  const divEl = createCarModelsContainer();
  liEl.append(divEl);

  const modelH3El = createModelHeadingElement();
  divEl.append(modelH3El);

  createInitialModels(car.models, divEl);

  const btn2El = createLoadMoreButton(divEl, car.models);
  liEl.append(btn2El);

  return liEl;
}

function createBrandElement(brand) {
  const brandEl = document.createElement("h2");
  brandEl.textContent = `Brand: ${brand}`;
  return brandEl;
}

function createCarModelsContainer() {
  const divEl = document.createElement("div");
  divEl.classList.add("carModels");
  return divEl;
}

function createModelHeadingElement() {
  const modelH3El = document.createElement("h3");
  modelH3El.textContent = "Car models: ";
  return modelH3El;
}

function createInitialModels(models, container) {
  models.slice(0, 5).forEach((model) => {
    const modelPEl = createModelParagraphElement(model);
    container.append(modelPEl);
  });
}

function createModelParagraphElement(model) {
  const modelPEl = document.createElement("p");
  modelPEl.textContent = model;
  return modelPEl;
}

function createLoadMoreButton(container, models) {
  const btn2El = document.createElement("button");
  btn2El.textContent = "Load more";
  btn2El.classList.add("load-more-button");
  btn2El.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = "";

    models.forEach((model) => {
      const modelPEl = createModelParagraphElement(model);
      container.append(modelPEl);
    });
    btn2El.style.display = "none";
  });

  return btn2El;
}
