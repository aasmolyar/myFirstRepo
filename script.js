'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let rollback = 10;
let fullPrice = getFullPrice();
let adaptive = prompt('Нужен ли адаптив на сайте?');
let servicePercentPrice = getServicePercentPrices();

//lesson 04-----------------------------------
let allServicePrices = getAllServicePrices();
//lesson 04-----------------------------------

//lesson 04-----------------------------------
const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
}

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    let newStr = title.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}

function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - (fullPrice * (rollback / 100));
}
//lesson 04-----------------------------------

const showTypeOf = function (variable) {
    console.log(variable, typeof vatiable);
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

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split());
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());