/// <reference path="MobileObject.ts" />

module $MultiSpaceship$.Client {

    export class Spaceship extends MobileObject {

        constructor (game: Phaser.Game, x: number, y: number) {
            super(game, 'spaceship', 'ship', x, y);
            this.velocityX = 400;
            this.velocityY = 400;

            this.anchor.setTo(1, 0.5);

            this.game.add.existing(this);
        }
    }
}