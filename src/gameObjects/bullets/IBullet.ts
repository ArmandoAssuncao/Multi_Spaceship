module $MultiSpaceship$.Client {

    export interface IBullet {
        name: string;
        damage: number;
        speed: number;
        fireRate: number;
        styleBullet: Function;

        fire(): void;
        getObjectPhaser(): Phaser.Group;
    }
}