import axios from "axios";
import {log} from "util";

console.log('lesson 3');

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     title: 'Artemy Title',
//     body: 'Artemy Body',
//     userId: 1,
// }).then(response => log(response.data))
//
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => console.log(response.data))


// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// async function f() { // let f = async () => {}
//     try {
//         // let a = 10;
//         // console.log(a);
//         // const response = await somePromise;
//         const response = await Promise.resolve(1000);
//         // throw 50;
//         // return a + a;
//         return response
//     } catch (err) {
//         return err;
//     }
// }

// console.log('start')
// f().then(console.log)
// console.log('end')
// let c = 10
// console.log(c)

// just a plug
export default () => {
};