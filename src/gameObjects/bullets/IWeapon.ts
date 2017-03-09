module $MultiSpaceship$.Client {

    export interface IWeapon {
        owner: Phaser.Sprite;
        name: string;
        damage: number;
        styleBullet: Function;

        getObjectPhaser(): Phaser.Weapon;
    }
}