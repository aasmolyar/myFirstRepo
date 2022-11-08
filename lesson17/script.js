'use strict'

class FIrst {

    hello() {
        console.log('Привет, я метод родителя');
    }

};

class Second extends FIrst {

    hello() {
        super.hello();
        console.log('А я наследуемый метод');
    }

}

const call = new Second();

call.hello();

