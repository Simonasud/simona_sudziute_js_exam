"use strict";
console.log("script.js file was loaded");
/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget = 0) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  getInfo() {
    return this.budget > 1e8;
  }
}

const movie1 = new Movie("No Time to Die", "Cary Joji Fukunaga", 30e6);
const movie2 = new Movie(
  "Star Wars: The Force Awakens",
  "Jeffrey Jacob Abrams",
  447e6
);

function checkMovieInfo(movie) {
  console.log(movie.getInfo());
}

checkMovieInfo(movie1);
checkMovieInfo(movie2);
