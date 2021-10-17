import { log } from 'util';

console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


//console.log(this);

// function f() {
//     console.log('this in function declaration ', this);
// }
//
// f();

// let obj = {name: 'Evgen'};
//
// function f() {
//     console.log('this in function declaration ', this);
// }
//
// obj.f = f;
//
// f();
//
// obj.f();

// let obj = {name: 'Evgen'};
//
// function f() {
//     console.log('this in function declaration ', this);
//     function inner() {
//         console.log('this in inner ', this);
//     }
//     inner();
// }
//
// obj.f = f;
//
// obj.f();

// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna'};
//
// function f() {
//     console.log('this in function declaration ', this);
//     function inner() {
//         console.log('this in inner ', this);
//     }
//     return inner;
// }
//
// obj.f = f;
//
// obj2.inner = obj.f();
// obj2.inner();


// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna'};
//
// function f() {
//     console.log('this in function declaration ', this);
//     function inner() {
//         console.log('this in inner ', this);
//     }
//     return inner;
// }
//
// obj.f = f;
//
// obj2.inner = f();
// obj2.inner();

// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna'};
//
// let arrow = () => {
//     console.log('this in arrow ', this);
// }
//
// arrow();
//
// obj.a = arrow;
// obj.a();


// let obj = {
//     name: 'Evgen',
//     sayName: () => {
//         console.log('zhgfhzvc', this.name);
//     }
// };
//
// obj.sayName();


// let obj = new Object();
// obj.name = 'Evgen';
// obj.sayName = () => {
//     console.log('zhgfhzvc', this.name);
// }
//
// obj.sayName();


// function Test(name) {
//     this.name = name;
//     this.sayName = () => {
//         console.log('Test arrow ', this.name);
//     }
// }
//
// let result = new Test('Evgen');
// console.log(result);
// result.sayName();


// function Test(name) {
//     this.name = name;
//     this.sayName = () => {
//         console.log('Test arrow ', this.name);
//     }
// }
//
// let result = new Test('Evgen');
// //console.log(result);
// //result.sayName();
//
// let obj = {name: 'Hanna'};
// obj.a = result.sayName;
// obj.a();


// let T = (name) => {
//     this.name = name;
// }
//
// //let res = new T('Yo');
// let res = T('Yo');


// let obj = {
//     name: 'Evgen',
//     sayName() {
//         let arrow = () => {
//             console.log('arrow ', this);
//         }
//         return arrow;
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj2.a = obj.sayName();
// obj2.a();


// let obj = {
//     name: 'Evgen',
//     sayName() {
//         let arrow = function () {
//             console.log('arrow ', this);
//         }
//         return arrow;
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj2.a = obj.sayName();
// obj2.a();


// let obj = {
//     name: 'Evgen',
//     sayName() {
//         setTimeout(function() {
//             console.log(this);
//         },0);
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj.sayName();

// let obj = {
//     name: 'Evgen',
//     sayName() {
//         setTimeout( () => {
//             console.log(this);
//         },0);
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj.sayName();

// let obj = {
//     name: 'Evgen',
//     sayName() {
//         setTimeout(
//             setTimeout(
//                 () => {
//                     console.log(this);
//                 }, 100)
//             , 5000);
//     }
// };
//
// let obj2 = { name: 'Hanna'};
//
// obj.sayName();


// function f1() {}
// function f2() {}
// function f3() {}
// function f4() {}
//
// test(f1(f2(f3(f4()))))
//
// let obj = {name: 'Yo'};
//
// obj[(() => 'name')()]


// function f(one, two) {
//     console.log('One ', one);
//     console.log('Two ', two);
//     console.log(arguments);
// }
//
// f`some ${20} equal anothr ${10}`

/// Call, Apply, Bind

//@ts-ignore
// function f(arg, arg1, arg2) {
//     //@ts-ignore
//     console.log('this ', this.name, arg, arg1, arg2);
//     //console.log('this ', arg, arg1, arg2);
// }
//
// let obj = { name: 'Yo'};
//
// let bindFunc = f.bind(obj, 10, 50);
// bindFunc(0);

// let bindFunc = f.bind(null, 10, 50);
// bindFunc(5000)

//@ts-ignore
//obj.test = f.bind(null, 10, 50);
//@ts-ignore
//obj.test(5000)

//f.call(obj, 0, 2, 3)
// f.apply(obj, [0, 2, 3])
//
// function testFunc() {
//     console.log(arguments);
//     //[].forEach.call(arguments, (item => console.log(item)));
//     let prikol = [].forEach.bind(arguments, (item => console.log(item)));
//     prikol();
// }
// //@ts-ignore
// testFunc(5, 10, 50, 60,)
//
// let obj = {name: 'yo'};
// let obj2 = {name: 'Evgen'};
//
// function f(a1: any, a2: any) {
//     //@ts-ignore
//     console.log(this.name, a1, a2)
// }
//
// f.bind(obj, 10).bind(obj2, 20)();

// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//     name: string;
//     age: number;
//     greeting?: Function
// }
//
// let someObj:someObjType = {
//     name: 'Eugene',
//     age: 32
// }
//
// someObj.greeting = function greeting() {
//     return (`My name is ${this.name}. I am ${this.age}`)
// }
//
// console.log('someObj result: ' + someObj.greeting());

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект


// function Counter(count: number) {
//
//     //@ts-ignore
//     this.count = {
//         currentValue: count
//     };
//     //@ts-ignore
//     this.getCurrentCount = function () {
//         return this.count.currentValue;
//     }
//
//     //@ts-ignore
//     this.increment = function () {
//         this.count.currentValue = this.count.currentValue + 1;
//         return this.count;
//     }
//
//     //@ts-ignore
//     this.decrement = function () {
//         this.count.currentValue = this.count.currentValue - 1;
//         return this.count;
//     }
//
//     //@ts-ignore
//     this.setCurrentCount = function (count: number) {
//         this.count.currentValue =   count;
//         return this.count;
//     }
//
//     //@ts-ignore
//     this.resetCount = function () {
//         this.count.currentValue =  0;
//         return this.count;
//     }
// }
//
//
// //@ts-ignore
// let counter1 = new Counter(5)
//
// counter1.setCurrentCount(11)
// counter1.resetCount(11)
// counter1.increment()
// counter1.increment()
// // counter1.decrement()
// // counter1.decrement()
//
// console.log(counter1.getCurrentCount())
//
// class Counter {
//     constructor() {
//         //@ts-ignore
//         this.currentValue = 0;
//     }
//     getCurrentCount() {
//         //@ts-ignore
//         return this.currentValue
//     }
//     increment() {
//         //@ts-ignore
//         this.currentValue = this.currentValue + 1;
//         return this
//     }
//     decrement() {
//         //@ts-ignore
//         this.currentValue = this.currentValue - 1;
//         return this
//     }
//     setCurrentCount(currentCount: number) {
//         //@ts-ignore
//         this.currentValue = currentCount;
//         return this
//     }
// }
//
// let counter = new Counter()
// //@ts-ignore
// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01


// class myFirstConstuctorFunc {
//     constructor(name: string, age: number) {
//         //@ts-ignore
//         this.name = name;
//         //@ts-ignore
//         this.age = age;
//     }
//     greetings() {
//         //@ts-ignore
//         return `My name is ${this.name}. I am ${this.age}`
//     }
// }
//
// let obj2 = new myFirstConstuctorFunc ('Artemy', 36)
//
// let result = someObj.greeting.call(obj2, 'Artemy', 36)
//
// console.log(result)

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
//
// console.log(Two.sayHello.call(One))

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// const helperObj = {
//     name: '',
//     changeName: function (newName: string) {
//         this.name = newName;
//     },
//     setAge: function (age: number) {
//         //@ts-ignore
//         this.age = age;
//     },
//     greeting: Two.sayHello
// }
//
// helperObj.changeName('Artem')
// helperObj.setAge(36)
// console.dir(helperObj.greeting())

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// function sumTwoNumbers(a:number,b:number):number {return a + b};

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call



// just a plug
// export default () => {};