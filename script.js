'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite());
}

const asking = function () {

    title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные");

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {

    let sum = 0;
    let servicePrice;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            servicePrice = +prompt('Сколько это будет стоить?');
        } while (!isNumber(servicePrice));

        sum += servicePrice;
    }

    return sum;
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    let newStr = title.trim().toLowerCase();
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}

const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice - (fullPrice * (rollback / 100));
}
//lesson 04--------------------------------

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%';

    } else if (price >= 15000 && fullPrice < 30000) {
        return 'Даем скидку в 5%';

    } else if (price >= 0 && fullPrice < 15000) {
        return 'Скидка не предусмотрена';

    } else {
        return 'Что то пошло не так';
    }
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(screens.toLowerCase().split());
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);