module $MultiSpaceship$.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        mySpaceship: Spaceship;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.add.sprite(0, 0, 'level01-sprites','background');

            /*this.player = new Player(this.game, this.world.centerX, this.world.centerY);
            this.player.anchor.setTo(0, 5);*/

            this.mySpaceship = new Spaceship(this.game, this.world.centerX, this.world.centerY);
            this.mySpaceship.bullets = new LaserBullet(this.game, this.mySpaceship);

            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

    }

}