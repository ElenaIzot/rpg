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
    return Character;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(force, dexterity, intelligence, damage, health, experience, _adrenaline) {
        var _this = _super.call(this, force, dexterity, intelligence, damage, health, experience) || this;
        _this._adrenaline = _adrenaline;
        return _this;
    }
    Object.defineProperty(Warrior.prototype, "adrenaline", {
        get: function () {
            return this._adrenaline;
        },
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._adrenaline += value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Warrior.prototype.attack = function (defender) {
        defender.health -= this.damage;
        this.adrenaline = 10;
    };
    return Warrior;
}(Character));
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer(force, dexterity, intelligence, damage, health, experience, _adrenaline) {
        var _this = _super.call(this, force, dexterity, intelligence, damage, health, experience) || this;
        _this._adrenaline = _adrenaline;
        return _this;
    }
    Object.defineProperty(Archer.prototype, "adrenaline", {
        get: function () {
            return this._adrenaline;
        },
        set: function (value) {
            if (value >= 0 || value <= 100) {
                this._adrenaline += value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Archer.prototype.attack = function (defender) {
        defender.health -= this.damage;
        this.adrenaline = 10;
    };
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
    Magician.prototype.attack = function (defender) {
        defender.health -= this.damage;
    };
    return Magician;
}(Character));
var warrior = new Warrior(1, 1, 1, 1, 1, 1, 1);
var archer = new Archer(2, 2, 2, 2, 2, 2, 2);
var mag = new Magician(3, 3, 5, 3, 3, 3, 50);
var attacker = archer;
var defender = warrior;
var archer2 = new Archer(2, 2, 2, 2, 2, 2, 2);
console.log('archer2:', archer2);
archer2.attack(mag);
console.log('archer2 после атаки', archer2);
