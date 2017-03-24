module MultiSpaceship {

    export class PlasmWeapon extends Weapon implements IWeapon {

        constructor(game: Phaser.Game, parent: Phaser.PluginManager){
            super(game);
        }

        init(owner: Phaser.Sprite){
            super.init(owner, 'PlasmBullet', 'plasmBullet');
        }

    }
}