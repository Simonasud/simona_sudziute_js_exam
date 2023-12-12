"use strict";
console.log("script.js file was loaded");
/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};
// console.log("audi ===", audi);

function showObjectKeys(audiObj) {
  const keysArray = [];
  for (let key in audiObj) {
    // console.log("key  ===", key);
    // console.log('audiObj ===', audiObj);
    keysArray.push(key);
  }
  return keysArray;
}

const key = showObjectKeys(audi);
console.log("Keys:", key);
