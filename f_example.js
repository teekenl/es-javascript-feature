
// example 1
var triple = function triple(x) {
    return x*3;
};

var waffle = triple;

// example 2  filter
var animals = [
    {name:'Carrot', species:'rabbit'},
    {name:'Fluffyskins', species:'rabbit'},
    {name:'Milton', species:'dog'},
    {name:'Urusula', species:'cat'}
];
var isDog = function(animal) {
   return animal.species === 'dog';
};

var dog = animals.filter(isDog);
//var otherAnimals = animals.reject(isDog);

console.log(dog);

// example 3 map
var names = animals.map((animal)=>animal.name);
