`use strict;`
// -створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

function area (a,b){
return a*b
}
console.log(area(8,5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function round(radius){
    return 3.14*radius*radius;
}
console.log(round(8));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
function f(h,r) {
   return 2*3.14*r*h;
}
console.log(f)
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayFunction(arguments){
    for (const argument of arguments) {
       console.log(argument)
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
arrayFunction(users);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function f1(paragraph) {
    document.write(paragraph);

}
f1("lorem ipsum")
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function f2(li) {
    document.write(`<ul>`)
    for (let i = 0; i <3; ++i) {
       document.write(`<li>${li}</li>`);
    }

    document.write(`</ul>`)
}
f2("lorem");


// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write
function f3(list,number) {
document.write(`<ul>`)
    for (i = 0; i <number; i++) {
       document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
}
f3("lorem ipsum dolor",6);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через
// document.write
function arraysFunction1(x){
    document.write(`<ul>`)
    for (arr of array1) {
        document.write(`<li>${arr}</li>`)
    }
    document.write(`</ul>`)
}
array1=[1,2,3,true,'string',false,6,'hello','numbers'];
arraysFunction1(array1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function f4(users1) {
    for (const user of users1) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)

    }}

f4([
    {id:1,name:'sasha', age:22},
    {id:2,name:'masha', age:32},
    {id:3,name:'misha', age:28}
])

// - створити функцію яка повертає найменьше число з масиву
// function minNumb(arrNumb){
//     for (const numbElement of arrNumb) {
//         if (){}
//
//     }
// }
// minNumb([1,6,8,0,9,10]);


// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    return
}