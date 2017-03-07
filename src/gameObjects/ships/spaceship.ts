module $MultiSpaceship$.Client {

    export class Spaceship extends Phaser.Sprite implements IShip {

        private _bullets: IBullet;
        speed: number;
        cursors: any;

        constructor (game: Phaser.Game, x: number, y: number) {
            super(game, x, y,'ship', 1);
            this.name = 'spaceship';
            this.speed = 200;

            this.create();

            this.game.add.existing(this);
        }

        set bullets(bullets: IBullet){
            this._bullets = bullets;
        }


        create(){
            this.anchor.setTo(0.5, 0.5);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);

            this.body.collideWorldBounds = true;

            this.cursors = {
                up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
                right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
                down:  this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
                left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
                fire: this.game.input.keyboard.addKey(Phaser.Keyboard.S)
            }
        }

        update(){
            if (this.alive) {
                this.body.velocity.setTo(0, 0);

                if (this.cursors.up.isDown)
                    this.body.velocity.y = -this.speed;
                else if (this.cursors.down.isDown)
                    this.body.velocity.y = this.speed;

                if (this.cursors.left.isDown)
                    this.body.velocity.x = -this.speed;
                else if (this.cursors.right.isDown)
                    this.body.velocity.x = this.speed;

                if (this.cursors.fire.isDown){
                    this._bullets.fire();
                }
            }
        }
    }
}