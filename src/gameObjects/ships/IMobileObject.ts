module MultiSpaceship {

    export interface IMobileObject {
        name: string;
        health: number;
        damage: Function;
        velocityX: number;
        velocityY: number;
        alive: boolean;
        moveStyle: Function;
        inputKeys: InputKeys;
        weapon: IWeapon;

        getObjectPhaser(): Phaser.Sprite;
    }
}