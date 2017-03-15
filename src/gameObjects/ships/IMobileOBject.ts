module $MultiSpaceship$.Client {

    export interface IMobileOBject {
        name: string;
        health: number;
        velocityX: number;
        velocityY: number;
        alive: boolean;
        inputKeys: InputKeys;
        weapon: IWeapon; //must be private

        getObjectPhaser(): Phaser.Sprite;
    }
}