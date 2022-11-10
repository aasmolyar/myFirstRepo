'use strict'

class Worker {

    constructor(name, lastName, age, position) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
    }
};

const worker = new Worker();

class Locksmith extends Worker {

    constructor(name, lastName, age, position, organisation, category, skills = []) {
        super(name, lastName, age, position);
        this._organisation = organisation;
        this.category = category;
        this._skills = skills;
    }

    get organisation() {
        return this._skills;
    };

    set skills(str) {
        this.skills.push(str)
    }
};

const locksmith = new Locksmith();

locksmith.skills = 'welding';


class Driver extends Worker {

    constructor(name, lastName, age, position, children, dateOfEmployment) {
        super(name, lastName, age, position);
        this._children = children;
        this.dateOfEmployment = dateOfEmployment;
    }

    get children() {
        return this._children;
    }
};

const driver = new Driver();

