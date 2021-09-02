class Character {
    public force: number;
    public dexterity: number;
    public intelligence: number;
    public damage: number;
    public  health: number;
    public  experience: number;

    constructor(
        force: number,
        dexterity: number,
        intelligence: number,
        damage: number,
        health: number,
        experience: number
    ) {
        this.force = force;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.damage = damage;
        this.health = health;
        this.experience = experience;
    }

}

class Warrior extends Character {
    public _adrenaline: number;

    constructor(
        force: number,
        dexterity: number,
        intelligence: number,
        damage: number,
        health: number,
        experience: number,
        _adrenaline: number
    ) {
        super(force, dexterity, intelligence, damage, health, experience)
        this._adrenaline = _adrenaline;
    }

    set adrenaline(value: number) {
        if (this._adrenaline >= 0 && this._adrenaline <= 100) {
            this._adrenaline = value;
        }
    }

    attack(defender: Character): void {
        defender.health -= this.damage;
        this._adrenaline += 10;
    }
}

class Archer extends Character {
    public _adrenaline: number;

    constructor(force: number,
        dexterity: number,
        intelligence: number,
        damage: number,
        health: number,
        experience: number,
        _adrenaline: number
    ) {
        super(force, dexterity, intelligence, damage, health, experience)
        this._adrenaline = _adrenaline;
    }

    set adrenaline(value: number) {
        if (this._adrenaline >= 0 && this._adrenaline <= 100) {
            this._adrenaline = value;
        }
    }

    attack(defender: Character): void {
        defender.health -= this.damage;
        this._adrenaline += 10;
    }
}


class Magician extends Character {
    public mana: number;

    constructor(force: number,
        dexterity: number,
        intelligence: number,
        damage: number,
        health: number,
        experience: number,
        mana: number
    ) {
        super(force, dexterity, intelligence, damage, health, experience);
        this.mana = mana;
    }

    maxReserveMana(): number {
        let message = 'Достигнут макисмальный запас магии.'
        const maxMana = this.intelligence * 10;
        if (this.mana >= maxMana) {
            console.log(message);
            return this.mana = maxMana;
        }
        return this.mana = maxMana;
    }

    attack(defender: Character): void {
        defender.health -= this.damage;
    }
}

const warrior = new Warrior(1, 1, 1, 1, 1, 1, 1);
const archer = new Archer(2, 2, 2, 2, 2, 2, 2);
const mag = new Magician(3, 3, 5, 3, 3, 3, 50);

let attacker = archer;
let defender = warrior;

console.log('Лучник атакует воина:', archer.attack(warrior));
console.log('Воин после атаки:', warrior);
