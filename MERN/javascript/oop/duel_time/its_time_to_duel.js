class Red_Belt_Ninja {
    constructor(){
        this.name = 'Red Belt Ninja'
        this.cost = 3;
        this.power = 3;
        this.resilience = 4;
    }
    display() {
        console.log('name: ', this.name)
        console.log('cost: ',this.cost)
        console.log('power: ',this.power)
        console.log('resilience: ',this.resilience)
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.name}`)
        target.resilience -= this.power
    }
}
class Black_Belt_Ninja extends Red_Belt_Ninja {
    constructor() {
        super();
        this.name = 'Black Belt Ninja'
        this.cost = 4;
        this.power = 5;
        this.resilience = 4;
    }
}

class Effect_Cards {
    constructor() {
        this.cost = 0;
        this.text = '';
        this.stat = null;
        this.magnitude = 0;
    }

    play(  target ) {
        if( target instanceof Red_Belt_Ninja ) {
            console.log(this.text, ` is played on ${target.name}`  );
            target[`${this.stat}`] += this.magnitude
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Hard_Algorithym extends Effect_Cards {
    constructor(){
        super();
        this.cost = 2;
        this.text = 'increase target\'s resilience by 3';
        this.stat = 'resilience';
        this.magnitude = 3
    }
}

class Unhandled_Promise_Rejection extends Effect_Cards {
    constructor(){
        super();
        this.cost = 1;
        this.text = 'reduce target\'s resilience by 2';
        this.stat = 'resilience';
        this.magnitude = -2
    }
}

class Pair_Programming extends Effect_Cards {
    constructor(){
        super();
        this.cost = 2;
        this.text = 'increase target\'s power by 2';
        this.stat = 'power';
        this.magnitude = 2
    }
}

let jake = new Red_Belt_Ninja;
let ha = new Hard_Algorithym;
jake.display();
ha.play(jake);
jake.display();

let kelvin = new Black_Belt_Ninja;
kelvin.display();
let upr = new Unhandled_Promise_Rejection;
upr.play(jake)
jake.display();
let pp = new Pair_Programming;
pp.play(jake)
jake.display();
jake.attack(kelvin);
kelvin.display();
















