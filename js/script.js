'use strict'

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');             // ползунок
const inputRangeValue = document.querySelector('.rollback .range-value'); //span под ползунком

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

let select = document.querySelector('select');
console.log(select);
let input = document.querySelector('input');
console.log(input);

const collectionForMainControls = document.getElementsByClassName('main-controls__views element')[0];

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screenCount: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        this.addTitle();
        this.stop();
        startBtn.addEventListener('click', this.start.bind(appData));
        startBtn.addEventListener('click', this.disableItems.bind(appData));//==========================

        buttonPlus.addEventListener('click', this.addScreenBlock.bind(appData));

        collectionForMainControls.addEventListener('mouseout', this.stop.bind(appData));

        inputRange.addEventListener('input', this.logger1.bind(appData));
        inputRange.addEventListener('change', this.getRollBack.bind(appData));

    },
    disableItems: function () {    // глушим селект//==========================
        select.disabled = true;
    },
    getRollBack: function () {
        this.rollback = inputRangeValue.textContent;
    },
    logger1: function (event) {
        inputRangeValue.textContent = event.target.value;
    },
    addTitle: function () {
        document.title = title.textContent;
    },

    stop: function () {
        screens = document.querySelectorAll('.screen') //коллекция всех экранов
        //debugger
        screens.forEach((screen, index) => {              //перебираем кажд элемент из screens
            select = screen.querySelector('select');      //коллекция селектов
            input = screen.querySelector('input');        //количество экранов, сколько вбили
            const selectName = select.options[select.selectedIndex];  //достаем текст из селекта: "Простых 500 р"

            if (input.value === '' || selectName.value === '') {
                startBtn.setAttribute('disabled', true);
            } else {
                startBtn.removeAttribute('disabled');
            }
        })
    },
    start: function () {
        this.addScreens.bind(appData);
        this.addServices.bind(appData);
        this.addPrices.bind(appData);
        /*appData.getServicePercentPrices();
         appData.logger(); */
        this.showResult.bind(appData);
    },

    isNull: function (value) {
        return value === null;
    },

    isString: function (str) {
        return !this.isNumber(str) && str.trim() !== '';
    },

    stringChecking: function (question, defaultValue) {
        let result;
        do {
            result = prompt(question, defaultValue);
        } while (this.isNull(result) || !this.isString(result));
        return result;
    },

    numberChecking: function (question) {
        let result;
        do {
            result = prompt(question);
        } while (this.isNull(result) || !this.isNumber(result));
        return result;
    },

    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
        totalCount.value = this.screenCount;
    },
    addScreens: function () {                        //функция добавления экранов в массив
        screens = document.querySelectorAll('.screen') //коллекция всех экранов

        screens.forEach(function (screen, index) {              //перебираем кажд элемент из screens
            const select = screen.querySelector('select');      //коллекция селектов
            const input = screen.querySelector('input');        //количество экранов, сколько вбили
            const selectName = select.options[select.selectedIndex].textContent;  //достаем текст из селекта: "Простых 500 р"

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');//значение, выбран ли флажок в чекбоксе
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) { //если флажок выбран,
                this.servicesPercent[label.textContent] = +input.value; //попадают в лэйбл введенное значение
            }
        })

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');//значение, выбран ли флажок в чекбоксе
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) { //если флажок выбран,
                this.servicesNumber[label.textContent] = +input.value; //попадают свойства
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);  // создаем копию первого эл-та в коллекции screens
        screens[screens.length - 1].after(cloneScreen);
        this.stop();
    },

    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let screen of this.screens) {
            this.screenCount += +screen.count;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
    },

    logger: function () {
        console.log('fullPrice', + this.fullPrice);
        console.log(this.screens);
        console.log('screenPrice', + this.screenPrice);
        console.log(this.services);
        console.log('allServicePrices', + this.allServicePrices);
        console.log('servicePercentPrice', + this.servicePercentPrice);
    }
}

appData.init(); 