module MultiSpaceship {

    export class LaserWeapon extends Weapon implements IWeapon {

        constructor(game: Phaser.Game, parent: Phaser.PluginManager){
            super(game);
        }

        init(owner: Phaser.Sprite){
            super.init(owner, 'LaserBullet', 'bullet');
        }

    }
}