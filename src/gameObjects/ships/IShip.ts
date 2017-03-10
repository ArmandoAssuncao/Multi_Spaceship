module $MultiSpaceship$.Client {

    export interface IShip {
        name: string;
        health: number;
        speed: number;
        alive: boolean;
        weapon: IWeapon; //must be private

        getObjectPhaser(): Phaser.Sprite;
    }
}