`use strict;`
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (i = 0; i < 10; i++) {
    document.write(`<div>Lorem Ipsum is</div>`);
}

document.write(`<h2>2</h2>`);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum is - ${i}</div>`);
}
document.write(`<h2>3</h2>`);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let x=0;
while (x<20){
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</h1>`);
    x++;
}

document.write(`<h2>4</h2>`);
// -За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let a=0;
while (a<20){
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit!-${a}</h1>`);
    a++;
}
document.write(`<h2>5</h2>`);
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (const item of listOfItems){
    document.write(`<li>${item}</li>`)

}
document.write(`</ul>`)
document.write(`<h2>6</h2>`);
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://akva-svit.com.ua/image/cache/catalog/articles/blog-novosti/329-1200x650.webp'
    },
];

for (product of products){
    document.write(`<div class="product-card">
     <h3 class="product-title">${product.title}. Price -${product.price}</h3>
 <img src="${product.image}" alt="" class="product-image">
 </div>`)
}


// є масив
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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
for (const user of users) {
    if (user.status===true) {
        console.log(user);
    }

}
for (const user of users){
if(user.status===false){
    console.log(user);

}}
for (const user of users){
    if (user.age>30){}
    {console.log(user);}
}