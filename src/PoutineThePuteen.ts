// Poutine The Puteen
// Karan Chauhan & Tirth Thakkar

import DigiPet from "./DigiPet";

import Armor from "./Armor";
import OffensiveFood from "./OffensiveFood";

class PoutineThePuteen implements DigiPet {
tamName: string;
hp: number;

defenseCharacteristics: Armor = {
    strongAgainst: "meat",
    weakAgainst: "fruit",
};
foods: OffensiveFood[];

constructor(tamName: string) {
    this.tamName = tamName;
    this.hp = 60;
    console.log(`I, ${this.tamName} challenge you to this fight..`);

    this.foods = [
    { foodName: "Chopsy Chicken", foodCat: "meat", damage: 8 },
    { foodName: "Bacon Bomb", foodCat: "meat", damage: 10 },
    { foodName: "Smoked Squid", foodCat: "meat", damage: 10 },
    { foodName: "Ham The Hercules", foodCat: "meat", damage: 10 },

    { foodName: "Watermelon Cannon", foodCat: "fruit", damage: 4 },
    { foodName: "Bloody Blackberries", foodCat: "fruit", damage: 4 },
    { foodName: "Watermelon Water Gun", foodCat: "fruit", damage: 2 },

    { foodName: "Awkward Oats", foodCat: "grain", damage: 4 },
    { foodName: "Coward Corn", foodCat: "grain", damage: 4 },
    { foodName: "Wheat Warrior", foodCat: "grain", damage: 4 },
    ];
}
public getFighterName(): string {
    return this.tamName;
}

public defend(): Armor {
    return this.defenseCharacteristics;
}

public attack(): OffensiveFood {
    return this.foods[Math.floor(Math.random() * this.foods.length)];
}

public takeDamage(damage: number): void {
    this.hp -= damage;
}

public getHP(): number {
    return this.hp;
}
}

export default PoutineThePuteen;
