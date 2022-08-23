const adv = document.querySelectorAll('.adv'); //Получили рекламу
console.log(adv);
adv[0].remove(); // Удалили рекламу

const books = document.querySelectorAll('.books'); //Получили родителя списка книг
console.log(books);

const bookElement = document.querySelectorAll('.book'); //Получили список книг
console.log(bookElement);

//Упорядочеваем список
books[0].prepend(bookElement[1]);
bookElement[1].after(bookElement[0]);
bookElement[0].after(bookElement[4]);
bookElement[4].after(bookElement[3]);
bookElement[3].after(bookElement[5]);

const target = document.querySelectorAll('[target="_blank"]'); //Получили коллекцию таргетов
console.log(target);

target[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')"; //Меняем подложку

const secondBookElements = bookElement[0].querySelectorAll('li');
console.log(secondBookElements);

//Упорядочеваем список
secondBookElements[1].after(secondBookElements[3]);
secondBookElements[3].after(secondBookElements[6]);
secondBookElements[6].after(secondBookElements[8]);
secondBookElements[9].after(secondBookElements[2]);

const fifthBookElements = bookElement[5].querySelectorAll('li');
console.log(fifthBookElements);

//Упорядочеваем список
fifthBookElements[1].after(fifthBookElements[9]);
fifthBookElements[9].after(fifthBookElements[3]);
fifthBookElements[3].after(fifthBookElements[4]);
fifthBookElements[4].after(fifthBookElements[2]);
fifthBookElements[2].after(fifthBookElements[6]);
fifthBookElements[6].after(fifthBookElements[7]);

//
const sixthBookList = bookElement[2].querySelector('ul');
console.log(sixthBookList);

sixthBookList.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');

const sixthBookListLi = bookElement[2].querySelectorAll('li');
console.log(sixthBookListLi);

sixthBookListLi[10].after(sixthBookListLi[9])
/* sixthBookElements[9].after(sixthBookElements[10]); */