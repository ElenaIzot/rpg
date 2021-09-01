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

    attack(defender: Warrior | Archer | Magician): void {
        defender.health -= this.damage;
        attacker.adrenalineScale += 10;
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

    attack(defender: Warrior | Archer | Magician): void {
        defender.health -= this.damage;
        attacker.adrenalineScale += 10;
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

    attack(defender: Warrior | Archer | Magician): void {
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
