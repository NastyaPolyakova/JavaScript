function greet(name){
    return `Привет, ${name}|`;
}
const message = greet("Nastya");
console.log(message)

function add(a,b){
    return a+b;
}

console.log(add(5,3))

const factorial = function fact(n){
    return n<=1 ? 1 : n * factorial(n-1);
}

console.log(factorial(5))

function square(x){
    return x * x;
}

const squareArrow = x => x*x;

console.log(squareArrow(6));

const sum = (a,b) => a+b;
console.log(sum(10,15));

const greetWorld = () => 'Hello, World!';
console.log(greetWorld());

const greetPerson = name =>{
    const greeting = `Привет, ${name}|`;
    return greeting;
}
console.log(greetPerson('Nastya'));

const getUser = () => ({
    name: 'Nastya',
    age: 30
});
console.log(getUser());

//Параметры и аргументы
//параметры - это переменные, указанные в определении функции
// аргументы - это реальные значения, передаваемые функции при вызове

// 1. параметры по умолчанию

function createWorld(nameWorld = 'Пустыня', size = 1000, timeOfday = 'день'){
    return `Создан мир "${nameWorld}" размером ${size} и временем суток ${timeOfday}`;
}
console.log(createWorld());


// Rest - неопределенное количество вргументов в виде массива
function sumAll(...numbers){
    return numbers((acc, num) => acc + num, 0);
}
console.log(sumAll(1,2,3,4,5))

// Hoisting - поднятие функций и переменных в верхнюю часть области видимости

sayHi();
sayBye();

function sayHi(){
    console.log('Привет');
}
function sayBye(){
    console.log('Пока');
}

//IEFE - немедленно вызываемые функциональные выражения.
// Используется для изоляции области видимости

// пример:

(function(){
    const secret = 'секрет';
    console.log(secret);
})();

// стрелочная

const result = (()=>{
    const a = 5;
    const b = 10;
    return a+b
})
console.log(result);