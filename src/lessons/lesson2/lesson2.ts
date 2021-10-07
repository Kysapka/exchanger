console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Области видимости создают: Function, Class, / If/else, Switch, Try/Catch, Anonimus code

// var, function - functional
// let,const - block

// STEP_1
// let globalScope = {
//     otherScope: null,
//     f: Function,
//     b: 500, // undefined --> 500
//     a: 10,
//     c: 1000
// }
//
// let a = 10;
// function f() {
//
// }
// var b = 500;
// const c = 1000;

// STEP_2
// let globalScope = {
//     otherScope: null,
//     f: Function,
//     a: 500, // 50 -->500
// }
// let a = 10;
// function f() {
//     let functionScope = {
//         otherScope: globalScope,
//         b: 500
//     }
//     console.log(a);
//     let b = 500;
//     a = b;
// }
// f();
// console.log(a)

// STEP_3
// let globalScope = {
//     otherScope: null,
//     f: Function,
//     a: 10,
//     c: Function
// }
//
// let a = 10;
//
// function f() {
//     let functionFScope = {
//         otherScope: globalScope,
//         h: Function,
//         b: 500
//     }
//     console.log(a); // 10
//     let b = 500;
//
//     function h() {
//         let functionHScope = {
//             otherScope: globalScope,
//
//         }
//         console.log(b); // undefined
//         a = b;
//     }
//     return h;
// }
//
// let c = f();
//
// console.log(a) // 10
// c();
// console.log(a)

// Recursion
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function  sumTo(n: number) {
//     let sum =0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum
// }
//

// function sumTo(n: number): number {
//     if (n === 1) return n
//     return n + sumTo(n - 1)
// }

// ХВОСТОВАЯ РЕКУРСИЯ (НЕ РАБОТАЕТ В JS)
// function sumTo(n: number, acc: number): number {
//     if (n === 1) return n + acc
//     return sumTo(n - 1, acc + n)
// }
// console.log(sumTo(100, 0))

// const sumTo = (n: number): number =>  n === 1 ? n : n + sumTo(n - 1)
// console.log(sumTo(100))



// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sumFn = (n1: number) => {
//     return (n2: number) => {
//         return n1 + n2
//     }
// }
// let result = sumFn(3)(6)
// console.log(result)

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// const makeCounter = () => {
//     let count = 1;
//     return () => {
//         console.log(count++)
//     }
// }
//
// const counter = makeCounter();
// const counter2 = makeCounter();
// counter();
// counter();
// counter2();
// counter();

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeCounter = (initValue: number) => {
//     return {
//         increase: () => ++initValue,
//         decrease: () => --initValue,
//         set: (value: number) => value,
//         reset: () => 0
//     }
// }
//
// const counter = makeCounter(10);
// const counter2 = makeCounter(20);
//
// console.log(counter.increase())
// console.log(counter.decrease())
//
// console.log(counter2.increase())
// console.log(counter2.decrease())
//
// console.log(makeCounter(5).set(3))
// console.log(makeCounter(5).reset())


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// function superSum (num: number) {
//     if(num <= 0) return 0;
//     if (num === 1) return (n: number) => n;
//     let acc: number[] = [];
//     function helper( ...args: number[]) {
//         acc = [...acc, ...args];
//         if (acc.length >= num) {
//             acc.length = num;
//             return acc.reduce((acc, number) => acc + number);
//         } else {
//             return helper;
//         }
//     }
//     return helper;
// }

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};