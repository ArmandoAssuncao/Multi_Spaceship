module $MultiSpaceship$.Client {

    export interface IShip {
        name: string;
        health: number;
        speed: number;
        alive: boolean;
        bullets: IBullet; //must be private

        getObjectPhaser(): Phaser.Sprite;
    }
}