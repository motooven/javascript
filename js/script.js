//"use strict";


// const answer = +prompt("Тебе есть 18");
// console.log(answer + 5);
// ЗАПОМНИТЬ вся инфа от пользователя приходит ВСЕГДА в виде типа строка (String)


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         action: {},
//         genres: [],
//         privat: false
// };


// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
/////////////////////////////////////////////////////////////////////////////////////////


// const num = 55;

// if (num < 49) {
//     console.log('num menshe 50');
// } else if (num > 100) {
//     console.log('num bolshe 100');
// } else {
//     console.log(num);
// }

// Тернарный оператор
//(num == 53) ? console.log('Yes') : console.log('Nooo');

// const num = 40;

// switch (num) {
//     case 49:  
//         console.log('num = 49');
//         break;
//     case 100:
//         console.log('num = 100');
//         break;
//     case 50:
//         console.log('num = 50');
//         break;
//     default:
//         console.log('default');
//         break;        
// }
////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = 50;
// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // } while (num <= 55);

// for (let i = 1; i <= 10; ++i) {
//     if (i == 6) {
//         continue;
//     }
//     if (i == 8) {
//         continue;
//     }
//     console.log(i);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         action: {},
//         genres: [],
//         privat: false
// };



// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//           if (a != null && a != '' && b != null && b != '' && a.length < 10) {
//                  personalMovieDB.movies[a] = b;
//                  console.log('Условие выполнилось успешно по добовлению!');
//           } else {
//               console.log('error');
//               i--;
//           } 
// }


// if (personalMovieDB.count < 10) {
//     console.log("Просмотренно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман!!!"); 
// } else {
//     console.log("Произошла ошибка!");
// }

// (personalMovieDB.count < 10) ? console.log("Просмотренно мало фильмов") 
// (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log("Вы классический зритель")
// (personalMovieDB.count >= 30) ? console.log("Вы киноман!!!") : console.log("Произошла ошибка!")

// console.log(personalMovieDB);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var num = 20;

// function showFirstMessage(text) {
//     let num = 10;
// }

// showFirstMessage("Hello World 2021");
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(5,3));
// console.log(calc(10,3));


// // функция дикларативная
// function ret() {
//     let num = 55;
//     //
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


// // функция экспесс
// const func01 = function () {
//         console.log('Привет');
// };

// func01();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Новая тема 15:25



// const str = 'teSt';

// console.log('Большие буквы:', str.toUpperCase());
// console.log('Маленькие буквы:', str.toLocaleLowerCase());
// console.log('Default any:', str);


// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11)); //тоже самое что и мтод slice

// console.log(logg.substr(6, 2));

// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// console.log(parseInt(test)); 
// console.log(parseFloat(test));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();


const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        action: {},
        genres: [],
        privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
              if (a != null && a != '' && b != null && b != '' && a.length < 10) {
                     personalMovieDB.movies[a] = b;
                     console.log('Условие выполнилось успешно по добовлению!');
              } else {
                  console.log('error');
                  i--;
              } 
    }
}
//rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!!!"); 
    } else {
        console.log("Произошла ошибка!");
    }
}
//detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм ${i}`);
    }
}
writeYourGenres();


