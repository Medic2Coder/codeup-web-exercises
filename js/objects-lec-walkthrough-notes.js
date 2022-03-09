"use strict";

//Creating an object

let car = {}
    console.log(typeof car);

car.make = 'Ford';

console.log(car);

car.model = 'Mustang';

console.log(car);

//Assigning Properties aka keys to an Object
//objects are assigned using the curly brackets

console.log(car.model);

let cohort =  {
    name: 'Fortran',
    Awesome: 'Sauce',
    Ambition: 'GRIT is an understatement',
}
console.log(cohort);


//Note: Object.property

car.honk = function () {
    console.log("Honque Honque")//french goose

}
    car.honk();

