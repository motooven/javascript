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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
//     }
// }
// start();


// const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         action: {},
//         genres: [],
//         privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 1; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его?", "");
    
//               if (a != null && a != '' && b != null && b != '' && a.length < 10) {
//                      personalMovieDB.movies[a] = b;
//                      console.log('Условие выполнилось успешно по добовлению!');
//               } else {
//                   console.log('error');
//                   i--;
//               } 
//     }
// }
// //rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотренно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман!!!"); 
//     } else {
//         console.log("Произошла ошибка!");
//     }
// }
// //detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);



// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм ${i}`);
//     }
// }
// writeYourGenres();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function first() {
    
//     setTimeout(function() {
//             console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const options ={
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

//console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);


// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//            // counter++;
//         }
//      } else {
//          console.log(`Свойство ${key} имеет значение ${options[key]}`);
//          counter++;
//      }
//  }

//  console.log(counter);

// console.log("####################################################################");


// const newMassiv =  {
//     name: 'Oleg',
//     age: 29,
//     year: 1991,
//     pol: 'men',
//     colorLove: {
//         perVar: 'red',
//         vtorVar: 'blue'
//     }
// };

// console.log(Object.keys(newMassiv).length);
// console.log(newMassiv['colorLove']['perVar']);
// console.log(newMassiv['colorLove']['vtorVar']);
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// const arr = [2, 3, 6, 8, 10];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) {
//     console.log(value);

// const str = prompt("");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 5;
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);
//Поверхностные копии обектов!!!!


// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add)); 

// const clone = Object.assign({}, add);

// clone.d = 25;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();


// newArray[1] = 'dadadadad';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpres', 'liveggg', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
      
//       console.log(internet);

 
// function log(a ,b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }      

// const num = [2, 5, 7];

// log(...num);



// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// newObj.one = 50;

// console.log(q);
// console.log(newObj);
//////////////////////////////////////////////////////////////////////////////////////////////////

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
// };

// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier;

// // Object.setPrototypeOf(jonh, soldier);


// let join = Object.create(soldier); 

// console.log(join.armor);
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     action: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    
//         while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 1; i++) {
//             const a = prompt("Один из последних просмотренных фильмов?", ""),
//                   b = prompt("На сколько оцените его?", "");
        
//                   if (a != null && a != '' && b != null && b != '' && a.length < 10) {
//                          personalMovieDB.movies[a] = b;
//                          console.log('Условие выполнилось успешно по добовлению!');
//                   } else {
//                       console.log('error');
//                       i--;
//                   } 
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотренно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман!!!"); 
//         } else {
//             console.log("Произошла ошибка!");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 1; i++) {

//             // let genre = prompt(`Ваш любимый фильм ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некоректные данные или не ввели их вообще');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }

//             let genres = prompt(`Введите ваш жанр через запятую`).toLowerCase();

//                 if (genres === '' || genres == null) {
//                          console.log('Вы ввели некоректные данные или не ввели их вообще');
//                          i--;
//                        } else {
//                            personalMovieDB.genres = genres.split(', ');
//                            personalMovieDB.genres.sort();
//                        }

//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log((String(null)));

// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog" + num);


// const fontSize = 26 + 'px';

// console.log(typeof(Number('4')));

// console.log(typeof(+'5'));

// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// 0, '', false, null, undefined, NaN,

// let switcher = null;

// if (switcher) {
//     console.log("Workingggg...");
// }


// switcher = 1;

// if (switcher) {
//     console.log("Workingggg...");
// }

// console.log(typeof(Boolean('4')));

// console.log(typeof(!!"44444"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let sum = [] + false - null + true;
// // console.log(sum);
// console.log([] + 1 + 2);

 
// alert("1"[0]);

// && всегда запинаеться на первой лжи 
// || всегда запинаеться на первой истене

// const a = [1,2,3];
// const b = [1,2,3];
// console.log( a == b );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// 

// console.log(circles);



// hearts.forEach(elements => {
//     console.log(elements);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
///////////////////////////////////////////////////////////////////////////////////////////////////

const box = document.getElementById("box");
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');
const circles = document.getElementsByClassName('circle');

// box.style.backgroundColor = 'blue';
// box.style.width = '200px';
// box.style.height = '50px';

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
box.style.cssText = 'background-color: green; width: 200px';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'red';
// }

hearts.forEach( i => {
    i.style.backgroundColor = 'yellow';
});


const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');

const wrapper = document.querySelector('.wrapper');

// wrapper.append(div);

// wrapper.prepend(div);

//circles[1].remove();

hearts[0].replaceWith(circles[1]);