import _ from 'lodash';

let dragons = [
    {name:'fluffyskins',element:'lightning'},
    {name:'noomi',element:'lightning'},
    {name:'karo',element:'fire'},
    {name:'splash',element:'water'},
];

// same as filter
let hasElement =
    _.curry((element,obj) => obj.element===element);

let lightningDragons =
    dragons.filter(hasElement('lightning'));

console.log(lightningDragons);
