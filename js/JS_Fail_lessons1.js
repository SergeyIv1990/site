//console.log("Hello world");

//var myVar, doSomething;
//doSomething = function(){
//    alert("you typed" + myVar);
//};

//var links, updatestate, updatebuttons, contentEl, navEl;

//contentEl = document.querySelector('.content');
//navEl = document.querySelector('.nav');

//links = {
  //  main: "This is the <strong>main</strong> page",
    //about: "This is the <strong>about</strong> page",
//    downloads: "This is the <strong>downloads</strong> page"
//};

//updatestate = function(state){
  //  if (!state) return;
    //contentEl.innerHTML = links(state.page);
//    updatebuttons(state);
//};
//updatebuttons = function(state){
//[].slice.call(navEl.querySelectorAll('a'))
//.forEach(function(e){
 //   var classList = e.parentNode.classList;
   // state.page === e.getAttribute('href')
//    ? classList.add('active')
  //  : classList.remove('active');
    //});
//};
//window.addEventListener('popstate', function(e){
  //  updatestate(e.state);
//});

//navEl.addEventListener('click', function(e){
  //  var state;
    //if (e.target.tagName !== 'A') return;
//    state = { page: e.target.getAttribute('href') };
  //  history.pushState(state, '', state.page);
    //updatestate(state);
//    e.preventDefault();
//});
// ДЗ-1 по работе с переменными:
//Необходимо создать четыре переменных (названия выбирайте на своё усмотрение).
//Первую - для хранения количества дней. Присвойте ей значение - 365.Вторую - для хранения названия нашей планеты "Земля".
//Третью - для хранения примерного количества жителей нашей планеты, присвойте ей значение "7 млрд.". Четвертую - для хранения слова "Солнце".
//Далее, используя текст и переменные, Вы должны вывести на экран такой абзац:
//"В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

//var day, planet, population, sun;
//day = 365;
//planet = "earth";
//population = 7000000000;
//sun = "Sun";
//console.log("В нашем году", day, "дней. Днём у нас светит", sun,". Население планеты составляет примерно ", population,"человек.");
//alert("В нашем году " + day + " дней. Днём у нас светит " + sun + ". Население планеты составляет примерно " + population +" человек.");
//var home = "В нашем году " + day + " дней. Днём у нас светит " + sun + ". Население планеты составляет примерно " + population +" человек.";
//document.write(home);

// ДЗ-2 по удалению из ... и добавлению элементов в Массив:
//1. Создайте массив с фруктами: апельсин, банан, груша.
//2. Выведите на экран, сколько на данный момент у вас фруктов в массиве.
//3. С помощью методов, изученных в предыдущем уроке, добавьте в конец массива два фрукта - яблоко и ананас, а в начало массива - грейпфрут.
//4. Выведите на экран, сколько на данный момент у вас фруктов в массиве.
//5. С помощью методов, изученных в предыдущем уроке, удалите из массива последний и первый элемент.
//6. Выведите на экран, сколько на данный момент у вас фруктов в массиве.
// а если удалить 2 элементь?

//var fruit = ["апельсин", "банан","груша"];
//console.log(fruit.length);
//console.log(fruit);
//fruit[3] = "яблоко";
//fruit.push("ананас");
//console.log(fruit);
//fruit.unshift("грейпфрут")
//console.log(fruit);
//fruit.pop();
//console.log(fruit);
//fruit.shift();
//console.log(fruit);
//delete fruit[1];
//console.log(fruit);

// У Вас есть массив, про который заранее известно, что в нем точно больше одного элемента. Но сколько именно - неизвестно. 
//Пусть это будет такой массив с фруктами: var fruits = ["яблоко", "апельсин", "груша", "гранат"];
//Напомню, что по условиям Вы не знаете сколько точно в нем элементов, их может быть и 100 и 200. Ваша задача состоит в том, 
//чтобы с помощью метода splice заменить в массиве предпоследний фрукт на "ананас" и вывести весь массив на экран.
//Когда это будет сделано, проверьте свой код на таком массиве: var fruits = ["банан", "мандарин", "манго"]; В этом массиве
// у Вас мандарин должен будет замениться на ананас.

//var fruits = ["банан", "мандарин", "манго"];
//fruits.splice( fruits.length - 2, 1, "ананас");
//console.log(fruits);

//Возьмите массив друзей из предыдущей темы: var friends = ["Алексей", "Вячеслав", "Григорий", "Настя", "Павел"];
//Напишите условие, которое проверяет: если количество элементов в массиве больше или равно 3, то выводится сообщение о том,
// что это большой массив, в котором как минимум 3 элемента. А иначе, выведите на экран сообщение о том, что это маленький массив. 

//var friends = ["Алексей", "Вячеслав", "Григорий", "Настя", "Павел"];
//var text = friends.length >= 3 ? "Это большой массив" : "Это маленький массив";
//console.log(text);

//if (friends.length >= 3) {
//    console.log("Это большой массив");
//}
//    else {
 //   console.log("Это маленький массив");
//};

//У Вас есть массив: var friends = ["Алексей", "Вячеслав", "Григорий", "Настя"];
//Вам нужно написать условие, что, если длина этого массива равна 4 и последним элементом является "Настя",
// то вывести на экран сообщение "Этот массив мне подходит", а иначе вывести на экран, что массив вам не подходит.

//friends = ["Алексей", "Вячеслав", "Григорий", "Настя"];
//var last_element_array_friends = friends[friends.length-1];
//if (friends.length == 4 && last_element_array_friends == "Настя"){
//    console.log("Этот массив подходит");
//}
//else {
//    console.log("Это массив не подходит");
//};
//Напишите множественное условие для действий при различных сигналах светофора.
//Если сигнал красный, то надо стоять, иначе, если желтый, то надо приготовиться, а иначе, можно идти.

//var traffic_signal = "yellow";
//if (traffic_signal == "red"){
//    console.log("Движение запрещено")
//}
//else if (traffic_signal == "yellow"){
//    console.log("Приготовтесть")
//}
//else if (traffic_signal == "green"){
//    console.log("Движение разрещено")
//};

//У Вас есть массив Друзей:
//var friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];
//С помощью цикла while нужно вывести на экран всех друзей, начиная с Григория и заканчивая Любовью. При условии, 
// что мы видим массив и знаем, как в нём расположены друзья.
// мой вариант:
//friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];
//var i = 7;
//while(i>2){
//    console.log(friends[friends.length - i]);
//    i--;
//};
// как нужно:
//i = 2;
//while(i <= 6){
//    console.log(friends[i++])
//};

//Написать цикл для вывода квадратов всех чисел от 1 до 7.
//В итоге вы должны получить такую картину:
//Квадрат 1 = 1
//Квадрат 2 = 4
//Квадрат 3 = 9
//Квадрат 4 = 16
//Квадрат 5 = 25
//Квадрат 6 = 36
//Квадрат 7 = 49

//for(i=1; i<8; i++)
//console.log("Квадрат", i, "=", i*i);

//Ваша задача написать код, который бы спрашивал у пользователя, сколько ему лет. Вы должны проанализировать полученный ответ,
// и если человеку больше 20 лет, то вам нужно вывести на экран фразу "Вы уже взрослый человек!", а если меньше 20 или равно 20,
// то вывести "Вы еще молоды, у Вас все впереди!".
//При этом возьмем допущение, что пользователь правильно укажет свой возраст, т.е. напишет именно число, без дополнительных символов, 
//т.к. различные проверки мы будет учиться писать позже.

//     Моё решение
//var p = prompt("Сколько вам лет?")
//if( p >= 20){
//    console.log("Вы уже взрослый человек!")};
//if(p < 20){
//    console.log("Вы еще молоды, у Вас все впереди!")};


//В качестве домашнего задания вам надо написать функцию, которая бы вычисляла квадрат переданного ей числа и выводила бы его на экран.
// Решение 1 (не правильное, но я оставил)
//var p = prompt("Введите число");
//alert (p*p);
//Решение 2

//function fun(p){
 //  var itog = Math.pow(p,2);
 //   console.log(itog);
//};
//fun(26);

//Написать функцию, которая бы запрашивала у пользователя число и выводила бы на экран куб, указанного пользователем числа.

//function func(){
//    var s = prompt("Введите число");
//    var itog = Math.pow(s,3);
//   console.log(itog);
//};
//func();

//Создать функцию fio(), которая поочередно запрашивает у пользователя имя, фамилию и отчество,
//а в качестве результата своей работы возвращает ФИО одной строкой с пробелами между словами.

//function fio(){
//    var f = prompt("Введите фамилию");
//    var l = prompt("Введите имя");
//    var o = prompt("Введите отчество");
//    console.log(f,l,o);
//};
//fio();

// 1. Напишите функцию, которая в качестве параметра получает строку, а как результат своей работы,
// возвращает количество символов в этой строке (не печатает на экран, а именно возвращает).
// 2. Запросите у пользователя ввод любого слова и поместите этот ввод в переменную.
// 3. Вызовите вашу функцию, а в качестве параметра передайте ей переменную, в которой сохранено слово пользователя.
// 4. Напечатайте на экран сообщение о том, сколько же символов оказалось в введенном пользователем слове.

//var string = "Some string"
//function st(){
//    var a = string.length;
//    return a;
//};
//st();

//function st(){
//    var a = string.length;
//    var l = prompt("Введите  любое слово");
//    var b = l.length;
//    console.log("В вашем слове",b,"буквы");
//};
//st();

//1. Напишите функцию, которая в качестве параметра получает строку, а как результат свой работы вычисляет, в строке больше 10 символов или меньше.
//2. Запросите у пользователя ввод любого слова и поместите этот ввод в переменную.
//3. Вызовите вашу функцию, а в качестве параметра передайте то самое слово, которое вы сохранили в переменную.
//4. Напечатайте на экран сообщение о том, больше 10 символов в этом слове, меньше или равно 10.

//function func(){
//    var l = prompt("Введите  любое слово");
//    var b = l.length;
//    if (b>=10){console.log("ваша строка больше 10 символов")}
//    else {console.log("ваша строка меньше 10 символов")};
//};
//func();

//В качестве домашнего задания задайте человеку вопрос через метод prompt().
//Правильный ответ заранее поместите в переменную var answer. Правильный ответ запишите полностью маленькими буквами.
//Когда получите ответ от пользователя, переведите его в нижний регистр и сравните с ответом из переменной.
//Если ответ верный, то выведите сообщение, что ответ верный, если нет, то сообщение о том, что неверный.
//После того как скрипт будет готов, попробуйте сами ответить на вопрос, вводя его разными буквами.
//Попробуйте на время убрать метод toLowerCase() из скрипта и посмотрите, что произойдет.

//var answer = prompt("Сталица Украины");
//var lowanswer = answer.toLowerCase();
//var kiev = "киев"
//if (kiev === lowanswer) console.log("Правильно");
//else console.log("Не правильно");

//У вас есть переменная var mySite = "http://ruseller.com";
//Вам надо написать функцию, которая примет эту переменную в качестве параметра, а в теле функции проверит с помощью метода indexOf, 
//встречается ли в этой переменной подстрока "http://".
//Если да, то вывести на экран сообщение, что в названии сайта присутствует указание протокола "http://", иначе - вывести, что не присутствует.

//mySite = "http://ruseller.com";
//function samfunc(){
//   var a = mySite.indexOf('http://');
//    if (a>-1) console.log ("присутствует");
//    else console.log("Не присутствует");
//}
//samfunc()

//У вас есть строка var myStr = "Хороший день.";
//Ваша задача поместить слово "день" из этой строки в переменную day с помощью метода slice.
//Вывести эту переменную на экран.
//var myStr = "Хороший день.";
//var day = myStr.slice(8,12)
//console.log(day)

//function makeArmy() {
//    let shooters = [];
//  
//    let i = 0;
//    while (i < 10) {
//        let j =i;
//      let shooter = function() { // функция shooter
//        alert( j );// должна выводить порядковый номер
//      };
//      shooters.push(shooter);
//      i++;
//    }
 //     return shooters;
//  }
 //   let army = makeArmy();
//    army[0](); // у 0-го стрелка будет номер 10
//  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

//function REZ (){
//  let result = [];
//    for (let i = 0; i < 5; i++) {
 //       var res = function(){
 //           alert(i)
 //       };
 //       result.push(res);
 //   }
 //       return result;  
 //   }                  
 //     var army =  REZ (); 
    
 //     army[2]();
 //     army[4]();

//const arr = [10, 12, 15, 21];
//for (var i = 0; i < arr.length; i++) {
//  setTimeout(function(i_con) {
//    return function() { console.log('Index: ' + i_con + ', element: ' + arr[i_con]);}
//  }(i), 500);
//};

//for (var j = 0; j < 3; j++) {
 // setTimeout(function() { alert(j); }, 1000 + j);
//}

//for (var i = 0; i < 3; i++) {
//  setTimeout(function(i_local) {
//  return function() { alert(i_local); } 
//  }(i), 1000 + i);
//}


//function createBase(baseNumber){
 // return function(N){
//    return baseNumber + N;
//  }
//}
//var addSix = createBase(6);
//console.log(addSix(10)); // returns 16
//console.log(addSix(21)); // returns 27


//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length; i++){
//  setTimeout (function(){
//      console.log("lala" + i)
//  },1500)
//}
// 1-й вариант
//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length; i++){
//  setTimeout (function(j){
//    return function(){console.log("lala" + j)}
//  }(i),1500)
//}
// 2-й вариант
//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length; i++){
//  (function(j){setTimeout (function(){
//      console.log("lala" + j)
//  },1500)})(i)
//}

//let result = []
//for (var i=0; i<5; i++){
//  result.push(function(){
//    console.log(i)
//  })
//}
//result[2]()
//result[2]()
//1-е решение
//let result = []
//for (var i=0; i<5; i++){
//  (function(j){
//    result.push(function(){
//      console.log(j)
//    })
//  })(i)
//}
//result[2]()
//result[4]()



//Задача:
//напиши функцию, которая принимает 1 параметр.
//при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
//и всё это с замыканиями
//например
//sum(3) = 3
//sum(5) = 8
//sum(228) = 236

//var sum = sumfunc(0) 
//function sumfunc (n){
//  return function (numb){
//    return n +numb;
//  }
//}
//console.log(sum(3))
//console.log(sum(5))
//console.log(sum(228))

//function createBase(baseNumber){
 // return function(N){
//    return baseNumber + N;
//  }
//}
//var addSix = createBase(6);
//console.log(addSix(10)); // returns 16
//console.log(addSix(21)); // returns 27
/*

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  const COLUMN = 3;
  const ROW = 3;
  
  let board = [];
  const SPACE_SIZE = 150;
  
  function drawBoard(){
    let id = 0;
    for(let i = 0; i < ROW; i++){
      board[i] = [];
      for(let j = 0; j < COLUMN; j++){
        board[i][j] = id;
        ctx.strokeStyle = "#000";
        ctx.strokeRect(j * SPACE_SIZE, i * SPACE_SIZE, SPACE_SIZE, SPACE_SIZE);
        id++;   
      }
    }
  }
  drawBoard();
  canvas.addEventListener("click", function(event) {
  let X = event.clientX ;
  let Y = event.clientY ;
  console.log(X,Y)
  });

  const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  let i = Math.floor(1.9);
  console.log(COMBOS.length)

*/

/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
      
    };

    shooters.push(shooter);
    i++;
  }
  
  return shooters;
}

let army = makeArmy();
 
army[0](); // у 0-го стрелка будет номер 10
//army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...  function () { alert(i); },*/


//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length;i++){
//  setTimeout (function(){
//    
//      console.log("lala" + i)
// },500)}

//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length;i++){
//  (function(j){setTimeout (function(){    
//    console.log("lala" + j)
//},500)})(i)}


//var arr = [1,2];
//var brr = arr;
//brr [0] = 42;
//console.log(arr)

//var arr1 = [1,2];
//var brr1 = arr1;
//brr1  = [42, 43];
//console.log(arr1)

//for (var i = 0; i<10; i++){
  //let j=i;
  //setTimeout(function(){
  //    console.log(j);
  //}, i*1000);
//}
/*
function Person (firstName, lastName, born){
  this.firstName = firstName;
  this.lastName = lastName;
  this.born = born;
}

Person.prototype.age = function(){
  var now = new Date();
  return now.getFullYear() - this.born;
}
var iam = new Person('Yura', 'Fedorenko',1990);
console.log(iam.age());
Нужно написать тело ифа как можно короче, чтоб в итоге массив brr был такой [1,2,3]




n=1
function isNaN(n) {
  n = +n; // ну или как вы там любите приводить что-то к числу

  return n !== n;
};
console.log( n); // true
console.log( isNaN()); // true


console.log(isNaN("37,5")); 

Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

var obj = {
  a: function(){
   console.log(this.prop);
  },
  prop: 1
 };
  
 obj.a.prop = 2;
 obj.a();
 var fn = obj.a;
 fn();

 

 function f() {
   
}

var a = Number(prompt ("Введите вашу зарплату"))
a=a+(a*0.15);alert("Премия 15% на руки "+ a);a=a-(a*0.1);alert("После налогов в 10% осталось "+ a);
a-=10;alert("После в магазине осталось "+ a);a/=2;alert("Разделили муж и жена "+ a);

console.log( f() == 3 ); // true
console.log( f()() == 6 ); // true
console.log( f()()() == 9 ); // true
document.write("1. "+a+"<br>"+"2. "+b+"<br>"+"3. "+c)

var a = prompt ("Введите своё имя");
var b = (new Date()).getFullYear() - (Number(prompt ("Введите год рождеия")));
if (b == 11 || b ==21 || b ==31 || b ==41 || b ==51 || b ==61  || b ==71 || b ==81 || b ==91  || b ==101 || b ==111 || b ==121 || b ==131) c="год"
  else if (b == 12 || b ==22 || b ==32 || b ==42 ||b == 52 || b ==62  || b ==72 || b ==82 || b ==92  ||b == 102 || b ==112 || b ==122 ||b == 132 ||
    b ==13 ||b == 23 || b ==33 || b ==43 ||b == 53 || b ==63  ||b == 73 || b ==83 ||b == 93  ||b == 103 || b ==113 ||b == 123 ||b == 133 ||
    b ==14 || b ==24 || b ==34 ||b == 44 || b ==54 ||b == 64  || b ==74 ||b == 84 || b ==94  || b ==104 || b ==114 || b ==124 || b ==134) c="годa"
  else c="лет";
var c;
document.write(a+" "+ b + " " +c)

//Задача с этажами и ценой
var a = Number(prompt ("Введите свой этаж"))
if (a<2){alert("Это безплатно")}
else if(a>1 && a<5){let b=20;let c=b*(a-1);alert("Заносим на "+a+" этаж за "+c+" грн")}
else if(a>4 && a<8){let b=30;let c=60+b*(a-4);alert("Заносим на "+a+" этаж за "+c+" грн")}
else {let b=40;let c=150+b*(a-7);alert("Заносим на "+a+" этаж за "+c+" грн")}

//Задача с этажами и ценой
var a = Number(prompt ("Введите свой этаж"))
if (a>-2 && a<2){alert("Это беcплатно")}
else if((a<-1 && a>-5)||(a>1 && a<5)){let b=20;let c=b*((Math.abs(-a))-1);alert("Заносим на "+a+" этаж за "+c+" грн")}
else if((a<-4 && a>-8)||(a>4 && a<8)){let b=30;let c=60+b*((Math.abs(-a))-4);alert("Заносим на "+a+" этаж за "+c+" грн")}
else {let b=40; let c=150+b*((Math.abs(-a))-7);alert("Заносим на "+a+" этаж за "+c+" грн")}

var a = Number(prompt ("Введите число"))
var b = Math.round(Math.random()*10);
alert(b)



var a = Number(prompt ("Введите число"))
var b = Math.round(Math.random()*10);
alert(b)
*/

/*
function X() {}
function Y() {}  
 
Y.prototype = Object.create(X.prototype);
var z = new Y();

console.log(z.constructor === Y);


function Person (name) {
  if (name) { 
    this.options.name = name;
  }
};

Person.prototype.options = {
  name: 'Default name'
};

var foo = new Person('foo');
var bar = new Person('bar');

console.log(foo.options.name);
console.log(bar.options.name);

let result = [];
for (var i=0; i<5; i++){
  (function(){
    var j=i;
    result.push(function(){
    console.log(j)})})()
}
result[2]()
result[4]()


function Person(name, age){
  this.name = name
  this.age = age
  console.log(this)
}
const elena=new Person("Elena", 20)
console.log(Person.constructor)





function arrayDiff(a, b){
  let i=0;
do {n=a.find(el=>el=b);console.log(n); a.splice(n,1),i++ } while (i<a.length);
console.log(a)


}
arrayDiff([1,2,2,2,3],[2])

let kur = [  {"r030":36,"txt":"Австралійський долар","rate":20.5077,"cc":"AUD","exchangedate":"21.01.2022" }
  ,{"r030":124,"txt":"Канадський долар","rate":22.6734,"cc":"CAD","exchangedate":"21.01.2022" }
  ,{   "r030":156,"txt":"Юань Женьміньбі","rate":4.4639,"cc":"CNY","exchangedate":"21.01.2022"}
  ,{   "r030":191,"txt":"Куна","rate":4.2678,"cc":"HRK","exchangedate":"21.01.2022" }
  ,{   "r030":203,"txt":"Чеська крона","rate":1.3235,"cc":"CZK","exchangedate":"21.01.2022" }
  ,{   "r030":208,"txt":"Данська крона","rate":4.3151,"cc":"DKK","exchangedate":"21.01.2022" }
  ,{   "r030":344,"txt":"Гонконгівський долар","rate":3.6379,"cc":"HKD","exchangedate":"21.01.2022" }
  ,{  "r030":348,"txt":"Форинт","rate":0.090148,"cc":"HUF","exchangedate":"21.01.2022" }
  ,{   "r030":356,"txt":"Індійська рупія","rate":0.3801,"cc":"INR","exchangedate":"21.01.2022" }
  ,{  "r030":360,"txt":"Рупія","rate":0.0019754,"cc":"IDR","exchangedate":"21.01.2022" }]


  console.log(kur[0].rate)

  const myObject = { name: 'name1', surname: 'surname1' };
Object.keys(myObject).forEach(key => {
    console.log(myObject[key])
})


const list = [{test: "a", test2: "aa"}, { test: "b", test2: "bb"}]
list.forEach(function(item) {
  if (typeof item === 'object') {
    let keys = Object.keys(item)
    keys.forEach((key) => {
      console.log(key, item[key]);
    });
  }
});

const list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

list.sort((a, b) => (a.color > b.color) ? 1 : -1)
console.log(list)


let data = {"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
                     {"user": "greg@mail.com", "rating": 14, "disabled": false},
                     {"user": "john@mail.com", "rating": 25, "disabled": true}],
            "condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}


data.data.sort((a, b) => (a.user > b.user) ? 1 : -1)
console.log(data.data)
console.log(toString(data.condition.sort_by))
console.log(data.condition.sort_by)
*/

/*
const arr=[1,2,3,4,5,6,7,8,9,10];
const found = arr.find(el=>el>5);
console.log(found)


function Str (a){

let arr = a.split(' ');
let b =""
if (arr[1] == '+'){b = arr[0]+arr[2]};
if (arr[1] == '*'){
 for (i=0; i<arr[2].length; i++){
  b=b + arr[0] 
  } 
  
};
if (arr[1] == '-'){
  if(arr[0].length-arr[2].length==0){b=""}
  else{
  
  for (i=0; i<arr[0].length-arr[2].length; i++){
    b=b + arr[0][0] 
    } 
    }
};
if (arr[1] == '//'){
for (i=0; i<Math.floor(arr[0].length/arr[2].length); i++){
  b=b + arr[0][0] 
  } 
  
};
console.log(b)
}
Str(".... + ..")
Str(".... * ..")
Str(".... - ..")
Str(".... - ....")
Str("...... // ..")
Str("....... // ..")
*/


const dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  console.log( '.'.repeat(operations[operator](left.length, right.length)))
}

dotCalculator (".... + ..")

/*

const dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
}


function dotCalculator (equation) {
  equation = equation.split(' ');
  
  let [a, operator, b] = equation;
  
  switch (operator) {
    case '+':
      equation = a.length + b.length;
      break;
    case '-':
      equation = a.length - b.length;
      break;
    case '*':
      equation = a.length * b.length;
      break;
    case '//':
      equation = Math.trunc(a.length / b.length);
      break;
  }
  a = [];
  for (let i = equation; i > 0; i--) {
    a.push('.');
  }
  
  return a.join('');
}



function dotCalculator (equation) {
  const arr = equation.split(' ');
  switch ( arr[1] ){
      case '+':
      return '.'.repeat( arr[0].length + arr[2].length )
      case '-':
      return '.'.repeat( arr[0].length - arr[2].length )
      case '*':
      return '.'.repeat( arr[0].length * arr[2].length )
      default:
      return '.'.repeat( arr[0].length / arr[2].length )
  }
}



function dotCalculator (equation) {
  
  let [ a, op, b ] = equation.split(' ');
  
  return '.'.repeat(eval(a.length + op[0] + b.length));
  
}



const dotCalculator = (equation) => {
  const result = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [a, action, b] = equation.split(' ');
  return '.'.repeat( result[action](a.length, b.length) );
}
*/