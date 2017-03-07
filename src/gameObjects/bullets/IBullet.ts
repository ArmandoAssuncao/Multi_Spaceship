module $MultiSpaceship$.Client {

    export interface IBullet {
        name: string;
        damage: number;
        speed: number;
        fireRate: number;

        fire(): void;
    }
}