'use strict'

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totslCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();

        appData.addPrices();
        /*  
         appData.getServicePercentPrices();
         appData.logger(); */
        console.log(appData)
        appData.showResult();
    },

    isNull: function (value) {
        return value === null;
    },

    isString: function (str) {
        return !appData.isNumber(str) && str.trim() !== '';
    },

    stringChecking: function (question, defaultValue) {
        let result;
        do {
            result = prompt(question, defaultValue);
        } while (appData.isNull(result) || !appData.isString(result));
        return result;
    },

    numberChecking: function (question) {
        let result;
        do {
            result = prompt(question);
        } while (appData.isNull(result) || !appData.isNumber(result));
        return result;
    },

    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })
        })
        console.log(appData.screens);
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');//значение, выбран ли флажок в чекбоксе
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) { //если флажок выбран,
                appData.servicesPercent[label.textContent] = +input.value; //попадают свойства
            }
        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');//значение, выбран ли флажок в чекбоксе
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) { //если флажок выбран,
                appData.servicesNumber[label.textContent] = +input.value; //попадают свойства
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);  // создаем копию первого эл-та в коллекции screens

        screens[screens.length - 1].after(cloneScreen);
        console.log(cloneScreen);
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    },

    getServicePercentPrice: function () {
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

appData.init(); 