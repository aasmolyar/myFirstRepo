'use strict'

const userProfession = document.getElementById('user_profession');
const userName = document.getElementById('first_name');
const userLastName = document.getElementById('last_name');
const userOrganisation = document.getElementById('organisation');
const userCategory = document.getElementById('category');
const userSkills = document.getElementById('skills');
const userEmploymentDate = document.getElementById('employment_date');
const userChildren = document.getElementById('have_children');
const button = document.getElementById('btn');

let userInfo = {};
let userInfoArray = [];

button.addEventListener('click', (event) => {  //запрещаем перезагрузку
    event.preventDefault()
});
button.addEventListener('click', personInfo);
button.addEventListener('click', createArray);
button.addEventListener('click', setuUerInfoArrayToLocalStorage);

//создаем объект
function personInfo() {
    userInfo = {
        userProfession: userProfession.value,
        userName: userName.value,
        userLastName: userLastName.value,
        userOrganisation: userOrganisation.value,
        userCategory: userCategory.value,
        userSkills: userSkills.value,
        userEmploymentDate: userEmploymentDate.value,
        userChildren: userChildren.value,
    }
    console.log('Object userInfo', userInfo);
};

// создаем массив из объекта
function createArray() {
    let userInfoArray = Object.entries(userInfo);
    console.log('userInfoArray', userInfoArray);
};

// заносим в localStorage - функция
function setuUerInfoArrayToLocalStorage() {
    localStorage.userInfoArray = JSON.stringify(userInfoArray);
    console.log('localStorage', localStorage);
};
//--------------------------------------------------------------------------------------

class Worker {

    constructor(name, lastName, age, position) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        Worker.incrementCount();
    }

    static count = 0;

    static getCount() {
        return Worker.count;
    }

    static incrementCount() {
        Worker.count++;
    }
};

const worker = new Worker();

// создаем класс слесарь на основе рабочего
class Locksmith extends Worker {

    constructor(name, lastName, age, position, organisation, category, skills = [], married) {
        super(name, lastName, age, position);
        this._organisation = organisation;
        this.category = category;
        this._skills = skills;
        this.married = married;
    }

    sayHello() {
        console.log(`Привет! меня зовут ${this.name}. Мне ${this.age} лет`);
    }

    get skills() {
        return this._skills;
    };

    set skills(str) {
        this._skills.push(str)
    }
};

const locksmith = new Locksmith();

locksmith.sayHello();

// создаем класс Водитель на основе рабочего
class Driver extends Worker {

    constructor(name, lastName, age, position, children, dateOfEmployment) {
        super(name, lastName, age, position);
        this._children = children;
        this.dateOfEmployment = dateOfEmployment;
    }

    sayHello() {
        console.log(`Привет! Меня зовут ${this.name}. Моя работа - ${this.position}`);
    }

    get children() {
        return this._children;
    }

    set children(str) {
        this._children.push(str)
    }
};

const driver = new Driver();

driver.sayHello();
