/// <reference path="Weapon.ts" />

module $MultiSpaceship$.Client {

    export class BallWeapon extends Weapon implements IWeapon {

        constructor(game: Phaser.Game, parent: Phaser.PluginManager){
            super(game);
        }

        init(owner: Phaser.Sprite){
            super.init(owner, 'BallBullet', 'enemyBullet');
        }

    }
}