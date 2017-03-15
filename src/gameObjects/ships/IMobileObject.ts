module $MultiSpaceship$.Client {

    export interface IMobileObject {
        name: string;
        health: number;
        velocityX: number;
        velocityY: number;
        alive: boolean;
        inputKeys: InputKeys;
        weapon: IWeapon;

        getObjectPhaser(): Phaser.Sprite;
    }
}