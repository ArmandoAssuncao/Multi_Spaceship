module MultiSpaceship {

    export class PlasmWeapon extends Weapon implements IWeapon {

        constructor(game: Phaser.Game, parent: Phaser.PluginManager){
            super(game);
            this.bulletClass = PlasmBullet;
        }

        init(owner: Phaser.Sprite){
            super.init(owner, 'PlasmBullet', 'plasmBullet');
        }

    }

    class PlasmBullet extends Bullet {
        constructor(game: Phaser.Game, x: number, y: number, key?: any, frame?: any){
            super(game, x, y, key, frame);
            this.damageBullet = 500;
        }
    }
}