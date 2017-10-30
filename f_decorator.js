
// define decorator here.
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}


class Cat {
    @readonly meow() {
        return `${this.name} says meow!`;
    }
}

// define mixin decorator
const Superpower = mixin({
    addPower(name) {
        this.powers().push(name);
        return this;
    },
    powers() {
        return this._powers_pocessed || (this._powers_pocessed = []);
    }
});

const UtilityBelt = mixin({
    addToBelt(name) {
        this.utilities().push(name);
        return this;
    },
    utilities(){
        return this._utility_items || (this._utility_items = []);
    }
});


@Superpower
@UtilityBelt
class ComicBookCharacter{
    constructor(first, last) {
        this.firstname = first;
        this.last = last;
    }

    realName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const batman = new ComicBookCharacter('Bruce', 'Wayne');
batman.addToBelt('batarang');
batman.addToBelt('cape');

console.log(batman.utilities());

batman.addPower('detective')
    .addPower('voice sounds like Gollum has asthma');

console.log(batman.powers());

