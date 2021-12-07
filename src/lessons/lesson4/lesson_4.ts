import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// Task 1
// setTimeout(() => console.log(1), 0);
// console.log(2);
// (() => console.log(3))();
// Promise.resolve(console.log(4));
// 2,3,4,1

// Task 2
// new Promise((res, rej) => {
//     console.log(1);
// })
// new Promise((res, rej) => {
//     setTimeout(() => console.log(2), 0);
// })
// Promise.resolve(setTimeout(() => console.log(3), 0));
// console.log(4)
// Promise.reject(console.log(5));
//1,4,5,2,3

//Task3
// (function(){
//     setTimeout(() => console.log(1), 100);
// })();
// console.log(2);
// let i = 0;
// while (i < 5000000000) {
//     i++
// }
// new Promise((res, rej) => {
//     setTimeout(() => console.log(3), 50);
// })
// function f() {
//     console.log(4);
// }
// Promise.resolve(console.log(5))
//2,5,1,3

//Task4
// function f(num: number) {
//     console.log(num);
// }
// Promise.resolve(1)
//     .then(f);
// (function () {
//     console.log(2);
// })();
// console.log(3)
// new Promise((res, rej) => {
//     console.log(4)
// });
// setTimeout(f, 0, 5)
//2,3,4,1,5

//Task5
// async function sleep(ms: number) {
//     return new Promise((res, reject) => {
//         setTimeout(() => {
//             console.log(ms);
//             res(ms);
//         }, ms*100)
//     })
// }
//
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
//
// show();

//Task6
// console.log(1)
// function f() {
//     console.log(2)
// }
// setTimeout(() => {
//     console.log(3);
//     let p = new Promise((res, rej) => {
//         console.log(4);
//         res(undefined);
//     });
//     p.then(() => f());
// }, 0);
// let l = new Promise((res, rej) => {
//     console.log(5);
//     rej();
// });
// l.then(res => console.log(res)).catch(() => console.log(6));
// console.log(7);
// 1,5,7,6,3,4,2

//Task from EPAM
// type testObjType = {
//     promise: null | Promise<any>
//     resolve: null | Function
//     reject:  null  | Function
//     onSuccess: (paramName: string) => void
//     onError: (paramName: string) => void
// }
//
// const handlePromise: testObjType = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: (paramName: string) => console.log(`Promise is resolved with data: ${paramName}`),
//     onError: (paramName: string) => console.log(`Promise is rejected with error: ${paramName}`),
// }
//
// export const createPromise = () => {
//     handlePromise.promise =  new Promise((res, rej) => {
//         handlePromise.resolve = res;
//         handlePromise.reject = rej;
//     })
//     handlePromise.promise
//         .then(handlePromise.onSuccess)
//         .catch(handlePromise.onError)
//
//     //@ts-ignore
//     window.hndlprom = handlePromise
// }
//
// export const resolvePromise = () => {
//     handlePromise.resolve && handlePromise.resolve(1);
// }
//
// export const rejectPromise = () => {
//     handlePromise.reject && handlePromise.reject(0);
// }


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
// const p = new Promise((res, rej) => {
//     console.log('Promise is created')
// })
// //@ts-ignore
// window.pr = p;

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// export const pr =  Promise.resolve('some resolve data');
//      pr.then(data => console.log('Promise data: ' + data))


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// export const rejectedPromise = new Promise((res, rej) => {
//     rej('Promise Error');
// }).catch(console.log)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let newPromise = new Promise((res, rej) => {
//     setInterval(() => {
//         res('Promise Data')
//     }, 3000)
// }).then(console.log)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// type testObjType = {
//     promise: null | Promise<any>;
//     resolve: null | Function;
//     reject: null | Function;
//     onSuccess: (paramName: string) => void;
//     onError: (paramName: string) => void;
// }
//
// const handlePromise: testObjType = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: (paramName: string) => {
//         console.log(`Promise is resolved with data: ${paramName}`);
//     },
//     onError: (paramName: string) => {
//         console.log(`Promise is rejected with error: ${paramName}`);
//     }
// }
//
// export const createPromise = () => {
//     handlePromise.promise = new Promise((res, rej) => {
//         handlePromise.resolve = res;
//         handlePromise.reject = rej;
//     });
//     handlePromise.promise
//         .then(handlePromise.onSuccess)
//         .catch(handlePromise.onError);
//     //@ts-ignore
//     window.hndlprom = handlePromise;
// }
//
// export const resolvePromise = () => {
//     handlePromise.resolve && handlePromise.resolve('1');
// }
//
// export const rejectPromise = () => {
//     handlePromise.reject && handlePromise.reject('0');
// }

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// const onSuccess = (param: any) => param + 'Artem'
// const print = (param: any) =>  console.log(param)
//
// let pr = new Promise((res, rej) => {
//     setInterval(() => {
//         res("My name is ")
//     }, 1000)
// })
//     pr
//         .then(onSuccess)
//         .then(print)


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

// let firstPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res({name: 'Anna'})
//     }, 2000)
// })
// let secondPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res({age: 16})
//     }, 3000)
// })
// let thirdPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res({city: ''})
//     }, 4000)
// })
//     Promise.all([firstPromise, secondPromise, thirdPromise])
//         .then((result) => {
//             let resultObj = result.reduce((acc, el) => Object.assign(acc, el), {})
//             console.log(resultObj)
//         })

// just a plug
export default ()=>{};