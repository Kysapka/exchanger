// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// const str = 'fgfggg'
// console.log(str[0]) // 'f'

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// Number.prototype.plus = function (n) {
// 	return this + n
// }
// Number.prototype.minus = function (n) {
// 	return this - n
// }
// const res = (2).plus(3).minus(1)
// console.log(res)

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

//
// function getStr() {
//     return [].slice.call(arguments, 1).join(arguments[0])
// }
//
// console.log(getStr('*', '1', 'b', '1c'))

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

// const tree = {
//     valueNode: 3,
//     next: [{
//         valueNode: 1,
//         next: null
//     },
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: [
//                 {
//                     valueNode: 1,
//                     next: null
//                 },
//                 {
//                     valueNode: 5,
//                     next: null
//                 }
//             ]
//         }]
// };

// var sum = 0;
//
// function getSum(obj) {
//     sum = sum + obj.valueNode;
//     if (obj.next != null) {
//         for (var i = 0; i < obj.next.length; i++) {
//             getSum(obj.next[i]);
//         }
//     }
//
//     return sum;
// }

// function getSum(obj) {
//     var arr = [obj],
//         sum = 0,
//         current;
//
//     while(arr.length > 0) {
//         current = arr.shift();
//         sum += current.valueNode;
//
//         if (current.next != null) {
//             for (var i = 0; i < current.next.length; i++) {
//                 arr.push(current.next[i]);
//             }
//         }
//     }
//
//     return sum;
// }
//
// console.log(getSum(tree))


// Task 5
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало
//
// function Book(name, author) {
// 	this.name = name;
// 	this.author = author;
// 	return this;
// }
//
// console.log(Book('JS', 'Artem'))

// function Foo(Cclass, name, author) {
//     return Cclass.call({}, name, author);
// }
// var book = Foo(Book, 'Учебник javascript', 'Петр Сергеев');
//
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

// Task 10
// Реализовать функцию сортировки массива пузырьком

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

// const tree2 = {
// 	value: 1,
// 	children: [
// 		{
// 			value: 2,
// 			children: [
// 				{ value: 4 },
// 				{ value: 5 },
// 			]
// 		},
// 		{
// 			value: 3,
// 			children: [
// 				{ value: 6 },
// 				{ value: 7 },
// 			]
// 		}
// 	]
// };

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));

// function foo(a) {
//     return function (b) {
//         return function (c) {
//             return `${a}${b}${c}`
//         }
//     }
// }
//
// const foo = a => b => c => `${a}${b}${c}`
// console.log(foo(1)(2)(3))

// String.prototype.myrepeat = function (n) {
//     let res = ''
//     for (let i = 0; i < n; i++) {
//         res = res + `${this}`
//     }
//     return res
// }
//
// console.log('abc'.myrepeat(20))
// const b = {
//     name: 'xxx',
//     prototype: {
//         xxx:'www'
//     }
// }
//
// let a = {}
// a.__proto__ = 'sss' // a.__proto__ = Object.prorotype \\ ->
// console.log(a.__proto__)



