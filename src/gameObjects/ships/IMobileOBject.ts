module $MultiSpaceship$.Client {

    export interface IMobileOBject {
        name: string;
        health: number;
        velocityX: number;
        velocityY: number;
        alive: boolean;
        inputKeys: InputKeys;
        getweapon: IWeapon;

        getObjectPhaser(): Phaser.Sprite;
    }
}