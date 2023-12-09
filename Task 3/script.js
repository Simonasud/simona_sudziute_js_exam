"use strict";
console.log("script.js file was loaded");
/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const usersUrl = "https://api.github.com/users";

const els = {
  btnEl: document.getElementById("btn"),
  outputEl: document.getElementById("output"),
  messageEl: document.getElementById("message"),
};
// console.log("btnEl ===", els.btnEl);
// console.log("outputEl ===", els.outputEl);
// console.log("messageEl ===", els.messageEl);

els.btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  getUsers();
});

function getUsers() {
  const fetchResult = fetch(usersUrl);
  fetchResult
    .then((resp) => resp.json())
    .then((usersArr) => {
      // console.log("usersArr ===", usersArr);
      generateUserCards(usersArr);
      els.messageEl.textContent = "";
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}

function generateUserCards(arr) {
  els.outputEl.innerHTML = "";
  arr.forEach((usrObj) => {
    const ulEl = document.createElement("ul");
    ulEl.classList.add("userCard");

    const liEl = document.createElement("li");
    liEl.textContent = usrObj.login;

    const avatarEl = document.createElement("img");
    avatarEl.src = usrObj.avatar_url;
    avatarEl.alt = `Avatar for ${usrObj.login}`;

    ulEl.appendChild(liEl);
    ulEl.appendChild(avatarEl);

    els.outputEl.appendChild(ulEl);
  });
}
