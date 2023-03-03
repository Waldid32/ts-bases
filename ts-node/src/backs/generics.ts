import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';

import { Villains, Hero } from '../interfaces'

// import { Hero } from "./interfaces/hero";
// import { Villains } from './interfaces/villains';


// // printObject(123);
// // printObject(new Date());
// // printObject({ a: 1, b: 2, c: 3 });
// // printObject(true);
// // printObject('Gabriela');
// // printObject([1, 2, 3, 4, 5, 6, 7, 7]);
// // printObject(123);

// const name = 'Waldid';

// console.log(genericFunctionArrow(3.145648).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase);
// console.log(genericFunctionArrow(new Date()).getDate());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villains>(deadpool).dangerLevel);
