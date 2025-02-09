// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr=[100,true,'red',34,87,false,'white',900,800,true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr.length);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
title:'title1',
pageCount:'count1',
genre:'genre1'};
let book2={
title:'title2',
pageCount:'count2',
genre:'genre2'};
let book3={
title:'title3',
pageCount:'count3',
genre:'genre3'};
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4={
    title:'title4',
    pageCount:'count4',
    genre:'genre4',
    authors:[{ name:'name4',
        age:'age4'},
        { name:'name4_2',age:'age4_2'},
    ]
};
let book5={
    title:'title5',
    pageCount:'count5',
    genre:'genre5',
    authors:[{ name:'name5',
        age:'age5'},
        { name:'name5_2',age:'age5_2'},
    ]
};
let book6={
    title:'title6',
    pageCount:'count6',
    genre:'genre6',
    authors:[{ name:'name6',
        age:'age6'},
        { name:'name6_2',age:'age6_2'},
    ]
};
console.log(book6);
console.log(book5);
console.log(book4);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users=[
    {name:'name1', username:'username1',password:'password1'},
    {name:'name2', username:'username2',password:'password2'},
    {name:'name3', username:'username3',password:'password3'},
    {name:'name4', username:'username4',password:'password4'},
    {name:'name5', username:'username5',password:'password5'},
    {name:'name6', username:'username6',password:'password6'},
    {name:'name7', username:'username7',password:'password7'},
    {name:'name8', username:'username8',password:'password8'},
    {name:'name9', username:'username9',password:'password9'},
    {name:'name10', username:'username10',password:'password10'},

];
let user0=users[0];
let user1=users[1];
let user2=users[2];
let user3=users[3];
let user4=users[4];
let user5=users[5];
let user6=users[6];
let user7=users[7];
let user8=users[8];
let user9=users[9];
console.log(user0.password);
console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу.

let temp=[

]