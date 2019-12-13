'use strict';

//Closure
function myValues() {
    var num1 = 10;
    var num2 = 15;
    function addNumbers() {
        return num1+num2;
    }
    return addNumbers;
}
var addFunction =  myValues();
console.log(addFunction());

//Function Prototype
function Cars(carName, price , type) {
    this.carName = carName;
    this.price = price;
    this.type = type;
}
Cars.prototype.name = function () {
    return this.carName+ " " +this.price+ " "+ this.type;
};
var myCar = new Cars("Volvo", "$20,000", "SUV");
console.log(myCar.name());

//Inheritance
function Store(storeName, storeLocation, carName, price, type) {
    Cars.call(this, carName, price, type);
    this.storeName = storeName;
    this.storeLocation = storeLocation;
}
Store.prototype = new Cars();
Store.prototype.name = Store;

var newStore = new Store('GM Motors', 'Nairobi', 'Toyota', '200,000','SUV');
console.log(newStore);



function greetings() {
    var myDate = new Date();
    var myHours = myDate.getHours();

    if (myHours >= 0 && myHours <12 ){
        console.log('Good Morning');
    } else if (myHours >= 12 && myHours <19 ){
        console.log('Good Afternoon');
    }else {
        console.log('Good Evening');
    }
}
greetings();