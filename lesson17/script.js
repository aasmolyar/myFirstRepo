'use strict'

const userProfession = document.getElementById('user_profession');
const userName = document.getElementById('first_name');
const userLastName = document.getElementById('last_name');
const uesrAge = document.getElementById('age')
const userOrganisation = document.getElementById('organisation');
const userCategory = document.getElementById('category');
const userSkills = document.getElementById('skills');
const userEmploymentDate = document.getElementById('employment_date');
const userChildren = document.getElementById('have_children');
const userMarried = document.getElementById('userMarried');
const button = document.getElementById('btn');
const buttonRemove = document.getElementById('btnRemove')
const tableBody = document.getElementById('tableBody');

let userInfo = {};
const workersList = [];
let locStorList = [];
let indexOfListReload = 0;

//==========================================================================================
document.addEventListener("DOMContentLoaded", (event) =>{ //при загрузке страницы
    resetLocStorList()
    setTableAfterReload()
});

button.addEventListener('click', (event) => {  
    event.preventDefault()
    personInfo()
    setUerInfoArrayToLocalStorage()
    resetLocStorList()
    render()
});

buttonRemove.addEventListener('click', (event) =>{
    customWorker.deleteInfo()
})

userProfession.addEventListener('click', (event) => {
    setLicenceSelect()
})
//==========================================================================================
//ф-я для заполнения таблицы после перезагрузки старницы
function setTableAfterReload() {
    if (locStorList != null) {
        for (let list in locStorList) {
            renderReload()
            indexOfListReload ++
        }
    } 
}
//==========================================================================================
// Перезаписываем данные из LocaoSttorage для заполнения таблицы
function resetLocStorList() {
    locStorList = JSON.parse(localStorage.getItem('workersList')); //достаем массив из локалСторэдж
}
//==========================================================================================
// ф-я добавления выбора категории прав
function setLicenceSelect() {
    let licenceAsk = document.createElement('p');
    if (userProfession.value === 'Водитель' && document.querySelectorAll('#licence').length === 0) {
        licenceAsk.innerHTML += '<label id="licenceLabel">Какая у Вас категория?</label> <br> <br> \
        <select name="licence" id="licence"> \
        <option value="A">A</option> \
        <option value="B">B</option> \
        <option value="C">C</option> \
        <option value="D">D</option> \
        </select>'
        userProfession.insertAdjacentElement('afterend', licenceAsk)

    } else if (userProfession.value === 'Слесарь' && document.querySelectorAll('#licence').length != 0) {
        document.getElementById('licence').remove();
        document.getElementById('licenceLabel').remove();
    }
}
//==========================================================================================
//создаем информацию об объекте
function personInfo() {
        userInfo = {
        userProfession: userProfession.value,
        name: userName.value,
        lastName: userLastName.value,
        age: uesrAge.value,
        organisation: userOrganisation.value,
        userCategory: userCategory.value,
        userSkills: userSkills.value,
        dateOfEmployment: userEmploymentDate.value,
        children: userChildren.value,
        married: userMarried.value,
    }

    const newWorker = workerCreator(userInfo)
    workersList.push( newWorker)
};

// заносим в localStorage - функция
function setUerInfoArrayToLocalStorage() {
        localStorage.setItem('workersList',JSON.stringify(workersList));
};
//==========================================================================================
// Создаем таблицу
    function newWorkerTR(/* worker */) {
        let locStorLength = locStorList.length -1; // узнаем длину массива локСтор

        const $workerTR = document.createElement('tr'),
            $professionTD = document.createElement('td'),
            $nameTD = document.createElement('td'),
            $lastNameTD = document.createElement('td'),
            $ageTD = document.createElement('td'),
            $marriedTD = document.createElement('td'),
            $childrenTD = document.createElement('td'),
            $organisationTD = document.createElement('td'),
            $dateOfEmploymentTD = document.createElement('td'),
            $skillsTD = document.createElement('td'),
            $emptyTD = document.createElement('td')

            $professionTD.textContent = locStorList[locStorLength].userProfession
            $nameTD.textContent = locStorList[locStorLength].name
            $lastNameTD.textContent = locStorList[locStorLength].lastName
            $ageTD.textContent = locStorList[locStorLength].age
            $marriedTD.textContent = locStorList[locStorLength].married
            $childrenTD.textContent = locStorList[locStorLength]._children
            $organisationTD.textContent = locStorList[locStorLength].organisation
            $dateOfEmploymentTD.textContent = locStorList[locStorLength].dateOfEmployment
            $skillsTD.textContent = locStorList[locStorLength].skills

            $workerTR.append($professionTD)
            $workerTR.append($nameTD)
            $workerTR.append($lastNameTD)
            $workerTR.append($ageTD)
            $workerTR.append($marriedTD)
            $workerTR.append($childrenTD)
            $workerTR.append($organisationTD)
            $workerTR.append($dateOfEmploymentTD)
            $workerTR.append($skillsTD)
            $workerTR.append($emptyTD)

            return $workerTR;
    }

    function render() {  //заносим в таблицу

        tableBody.append(newWorkerTR(/* worker */)) // добавляем в тело таблицы строку
}

// Создаем таблицу после загрузки страницы
    function newWorkerTRReload() {
        let locStorLength = indexOfListReload; // узнаем длину массива локСтор

        const $workerTR = document.createElement('tr'),
            $professionTD = document.createElement('td'),
            $nameTD = document.createElement('td'),
            $lastNameTD = document.createElement('td'),
            $ageTD = document.createElement('td'),
            $marriedTD = document.createElement('td'),
            $childrenTD = document.createElement('td'),
            $organisationTD = document.createElement('td'),
            $dateOfEmploymentTD = document.createElement('td'),
            $skillsTD = document.createElement('td'),
            $emptyTD = document.createElement('td')

            $professionTD.textContent = locStorList[locStorLength].userProfession
            $nameTD.textContent = locStorList[locStorLength].name
            $lastNameTD.textContent = locStorList[locStorLength].lastName
            $ageTD.textContent = locStorList[locStorLength].age
            $marriedTD.textContent = locStorList[locStorLength].married
            $childrenTD.textContent = locStorList[locStorLength]._children
            $organisationTD.textContent = locStorList[locStorLength].organisation
            $dateOfEmploymentTD.textContent = locStorList[locStorLength].dateOfEmployment
            $skillsTD.textContent = locStorList[locStorLength].skills

            $workerTR.append($professionTD)
            $workerTR.append($nameTD)
            $workerTR.append($lastNameTD)
            $workerTR.append($ageTD)
            $workerTR.append($marriedTD)
            $workerTR.append($childrenTD)
            $workerTR.append($organisationTD)
            $workerTR.append($dateOfEmploymentTD)
            $workerTR.append($skillsTD)
            $workerTR.append($emptyTD)

            return $workerTR;
    }

    function renderReload() {  //заносим в таблицу после загрузки
            tableBody.append(newWorkerTRReload()) // добавляем в тело таблицы строку
    }
//==========================================================================================

class CustomWorker {

    constructor({userProfession, name, lastName, age, position, married = false, organisation, children, dateOfEmployment}) {
        this.userProfession = userProfession;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        this.married = married;
        this.organisation = organisation;
        this.dateOfEmployment = dateOfEmployment;

        this._children = children;
        CustomWorker.incrementCount();
    }

    static count = 0;

    static getCount() {
        return CustomWorker.count;
    }

    static incrementCount() {
        CustomWorker.count++;
    }

    deleteInfo() {
        console.log('Всех заделичу');
        localStorage.clear()
        tableBody.innerHTML = ""
    }
};
const customWorker = new CustomWorker({ userProfession, name, age})

// создаем класс слесарь на основе рабочего
class Locksmith extends CustomWorker {
    #profession = 'Слесарь'
    constructor({userProfession, name, lastName, age, position, category, skills = [], married, organisation, children, dateOfEmployment}) {
        super({userProfession, name, lastName, age, position, married, organisation, children, dateOfEmployment});
        this.category = category;
        this._skills = skills;
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

    get profession() {
        return this.#profession
    }
};

// создаем класс Водитель на основе рабочего
class Driver extends CustomWorker {
    #licence
    #profession = 'Водитель'
    constructor({userProfession, name, lastName, age, position, licence, married, organisation, children, dateOfEmployment}) {
        super({userProfession, name, lastName, age, position, married, organisation, children, dateOfEmployment});
        this.#licence = licence;
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

    get licence() {
        return this.#licence;
    }

    set licence(licence) {
        this.#licence = licence;
    }

    get profession() {
        return this.#profession
    }
};

function workerCreator ({userProfession, ...workerData}) {
    if (userProfession === 'Слесарь') {
        return new Locksmith({userProfession, ...workerData})
        console.log(userProfession);
    } else if (userProfession === 'Водитель') {
        return new Driver({userProfession, ...workerData})
        console.log(userProfession);
    }
    throw new Error('Работник с такой профессией не найден!!!!!!')
}
