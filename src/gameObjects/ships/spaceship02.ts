/// <reference path="MobileObject.ts" />

module MultiSpaceship {

    export class Spaceship02 extends MobileObject {

        constructor (game: Phaser.Game, x: number, y: number) {
            super(game, 'invader', 'invader', x, y);
            this.velocityX = 300;
            this.velocityY = 300;

            this.game.add.existing(this);
        }
    }
}