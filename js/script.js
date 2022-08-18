'use strict'

const title = document.getElementsByTagName('h1');
console.log(title[0]);

const get = document.getElementsByClassName('handler_btn');
console.log(get);

const plusBtn = document.querySelector('.screen-btn')
console.log(plusBtn);

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
console.log(otherItemsPercent);
const otherItemsNumber = document.querySelectorAll('.other-items.number');
console.log(otherItemsNumber);



/* const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },

    isString: function (str) {
        return isNaN(parseFloat(str) && isFinite(str));
    },

    stringChecking: function (question, defaultValue) {
        let result;
        do {
            result = prompt(question, defaultValue);
        } while (!appData.isString(result));
        return result;
    },

    numberChecking: function (question) {
        let result;
        do {
            result = prompt(question);
        } while (!appData.isNumber(result));
        return result;
    },

    asking: function () {
        appData.title = appData.stringChecking('Как называется ваш проект?', "Калькулятор верстки");

        for (let i = 0; i < 2; i++) {
            let name = appData.stringChecking('Какие типы экранов нужно разработать?');
            let price = 0;

            price = appData.numberChecking('Сколько будет стоить данная работа?');
            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name = appData.stringChecking('Какой дополнительный тип услуги нужен?');
            let price = 0;

            price = appData.numberChecking('Сколько это будет стоить?');
            appData.services[name] = +price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getRollbackMessage: function (price) {

        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (price >= 15000 && price < 30000) {
            return 'Даем скидку в 5%';
        } else if (price >= 0 && price < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },
    logger: function () {
        console.log('fullPrice', + appData.fullPrice);
        console.log(appData.screens);
        console.log('screenPrice', + appData.screenPrice);
        console.log(appData.services);
        console.log('allServicePrices', + appData.allServicePrices);
        console.log('servicePercentPrice', + appData.servicePercentPrice);
    }
}

appData.start(); */