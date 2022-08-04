'use strict'

let title = "Project";
title = prompt('Как называется ваш проект?');

let screens = "Простые, Сложные, Интерактивные";
screens = prompt('Какие типы экранов нужно разработать?');

let screenPrice = 1000;
screenPrice = prompt('Сколько будет стоить данная работа?');

let rollback = 90;
let fullPrice = 1000000;
fullPrice = screenPrice + servicePrice1 + servicePrice2;

let adaptive = true;
adaptive = prompt('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');

let servicePercentPrice = fullPrice - rollback;
console.log(math.cell(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%')

} else if (15000 <= fullPrice && fullPrice <= 30000) {
    console.log('Даем скидку в %')

} else if (0 <= fullPrice && fullPrice <= 15000) {
    console.log('Скидка не предусмотрена')

} else (fullPrice <= 0) {
    console.log('Что то пошло не так')
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов ", screenPrice, " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта ", fullPrice, " рублей/долларов/гривен/юани");
console.log(screens.toLowerCase().split());
console.log("Процент отката посреднику за работу", ((fullPrice * (rollback / 100)) / fullPrice) * 100);


