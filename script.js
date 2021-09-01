// опиши систему классов для RPG игры, в которой: есть маг, воин и лучник.У каждого есть сила, ловкость, 
// интелект, наносимый урон, здоровье и опыт.У воина и лучника есть шакала адреналина(0 - 100), а у мага мана.
// Каждый персонаж может атаковать другого персонажа, при этом у воина и лучника при атаке накапливается
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character(force, dexterity, intelligence, damage, health, experience) {
        this.force = force;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.damage = damage;
        this.health = health;
        this.experience = experience;
    }
    Character.prototype.attack = function (defender) {
        defender.health -= this.damage;
    };
    return Character;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(force, dexterity, intelligence, damage, health, experience, adrenalineScale) {
        var _this = _super.call(this, force, dexterity, intelligence, damage, health, experience) || this;
        _this.adrenalineScale = adrenalineScale;
        return _this;
    }
    return Warrior;
}(Character));
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer(force, dexterity, intelligence, damage, health, experience, adrenalineScale) {
        var _this = _super.call(this, force, dexterity, intelligence, damage, health, experience) || this;
        _this.adrenalineScale = adrenalineScale;
        return _this;
    }
    return Archer;
}(Character));
var Magician = /** @class */ (function (_super) {
    __extends(Magician, _super);
    function Magician(force, dexterity, intelligence, damage, health, experience, mana) {
        var _this = _super.call(this, force, dexterity, intelligence, damage, health, experience) || this;
        _this.mana = mana;
        return _this;
    }
    Magician.prototype.maxReserveMana = function () {
        var message = 'Достигнут макисмальный запас магии.';
        var maxMana = this.intelligence * 10;
        if (this.mana >= maxMana) {
            console.log(message);
            return this.mana = maxMana;
        }
        return this.mana = maxMana;
    };
    return Magician;
}(Character));
var mag = new Magician(1, 1, 5, 1, 1, 1, 50);
// const warrior = new Warrior(2, 2, 2, 2, 2, 2, 50);
console.log(mag);
console.log(mag.maxReserveMana()); //50 'Достигнут макисмальный запас магии.'
