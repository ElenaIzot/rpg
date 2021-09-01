// опиши систему классов для RPG игры, в которой: есть маг, воин и лучник.У каждого есть сила, ловкость, 
// интелект, наносимый урон, здоровье и опыт.У воина и лучника есть шакала адреналина(0 - 100), а у мага мана.
// Каждый персонаж может атаковать другого персонажа, при этом у воина и лучника при атаке накапливается

class Character {
    force: number;
    dexterity: number;
    intelligence: number;
    damage: number;
    health: number;
    experience: number;

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

    attack(defender: Character, attacker: Character): void {
        defender.health -= this.damage;
        if (attacker.adrenalineScale) {
            attacker.adrenalineScale += 10;
        }
    }
}

class Warrior extends Character {
    adrenalineScale: number;

    constructor(
        force: number,
        dexterity: number,
        intelligence: number,
        damage: number,
        health: number,
        experience: number,
        adrenalineScale: number
    ) {
        super(force, dexterity, intelligence, damage, health, experience)
        this.adrenalineScale = adrenalineScale;
    }
}

class Archer extends Character {
    adrenalineScale: number;

    constructor(force: number,
        dexterity: number,
        intelligence: number,
        damage: number,
        health: number,
        experience: number,
        adrenalineScale: number
    ) {
        super(force, dexterity, intelligence, damage, health, experience)
        this.adrenalineScale = adrenalineScale;
    }
}


class Magician extends Character {
    mana: number;

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
}

const mag = new Magician(1, 1, 5, 1, 1, 1, 50);
let attacker = new Warrior(2, 2, 2, 2, 2, 2, 50);

console.log(mag);
console.log(mag.maxReserveMana()); //50 'Достигнут макисмальный запас магии.'