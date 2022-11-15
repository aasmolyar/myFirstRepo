'use strict'

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

console.log(Worker.getCount());


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

locksmith.name = 'Alex';
locksmith.age = 33;
locksmith.position = 'master';
locksmith.organisation = 'OOO MRK';
locksmith.category = '6'; ''
locksmith.skills = 'welding';
locksmith.skills = 'electricTools';
locksmith.married = true;

locksmith.sayHello();


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

driver.name = 'Igor';
driver.age = 39;
driver.position = 'gazelDriver';
driver.organisation = 'OOO MMK';
driver.category = '4';

driver.sayHello();

console.log(locksmith.name);
console.log(locksmith.age);
console.log(locksmith.skills);
console.log(locksmith.organisation);

console.log(driver.name);
console.log(driver.age);
console.log(driver.position);
console.log(driver.organisation);
console.log(driver.category);

// chicking the weight of our objects 

console.log(JSON.stringify(locksmith).length);
console.log(JSON.stringify(driver).length);
