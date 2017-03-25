module MultiSpaceship {

    export class PlasmaWeapon extends Weapon implements IWeapon {

        constructor(game: Phaser.Game, parent: Phaser.PluginManager){
            super(game);
            this.bulletClass = PlasmaBullet;
            this.bulletSpeed = 1200;
            this.fireRate = 150;
        }

        init(owner: Phaser.Sprite){
            super.init(owner, 'PlasmaBullet', 'plasmaBullet');
        }

    }

    class PlasmaBullet extends Bullet {
        constructor(game: Phaser.Game, x: number, y: number, key?: any, frame?: any){
            super(game, x, y, key, frame);
            this.damageBullet = 50;
        }
    }
}