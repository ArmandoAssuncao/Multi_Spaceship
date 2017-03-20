/// <reference path="MobileObject.ts" />

module $MultiSpaceship$.Client {

    export class Spaceship02 extends MobileObject {

        constructor (game: Phaser.Game, x: number, y: number) {
            super(game, 'invader', 'invader', x, y);
            this.velocityX = 300;
            this.velocityY = 300;

            this.anchor.setTo(0.5, 0.5);

            this.game.add.existing(this);
        }
    }
}