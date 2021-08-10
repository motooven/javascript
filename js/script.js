"use strict";


// const answer = +prompt("Тебе есть 18");
// console.log(answer + 5);
// ЗАПОМНИТЬ вся инфа от пользователя приходит ВСЕГДА в виде типа строка (String)


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        action: {},
        genres: [],
        privat: false
};


const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

