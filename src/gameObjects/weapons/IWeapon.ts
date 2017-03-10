module $MultiSpaceship$.Client {

    export interface IWeapon {
        owner: Phaser.Sprite;
        name: string;
        damage: number;
        styleWeapon: Function;

        fireWeapon(): void;
        getObjectPhaser(): Phaser.Weapon;
    }
}