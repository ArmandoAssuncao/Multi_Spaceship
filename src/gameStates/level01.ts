module $MultiSpaceship$.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: Player;
        mySpaceship: Spaceship;
        invader: Spaceship02;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'starfield');

            var imageBg = this.game.cache.getImage(this.background.key.toString());
            this.background.tileScale.x = this.world.width / imageBg.width;
            this.background.tileScale.y = this.world.height / imageBg.height;

            this.background.autoScroll(-80, 0);


            /*this.player = new Player(this.game, this.world.centerX, this.world.centerY);
            this.player.anchor.setTo(0, 5);*/

            this.mySpaceship = new Spaceship(this.game, this.world.centerX, this.world.centerY);
            this.mySpaceship.bullets = new LaserBullet(this.game, this.mySpaceship);

            this.invader = new Spaceship02(this.game, this.world.centerX, this.world.centerY);
            let ballBullet = new BallBullet(this.game, this.invader);
            ballBullet.styleBullet = StylesBullet.toObject(this.game, this.invader, this.mySpaceship, ballBullet.speed);
            this.invader.bullets = ballBullet;
            //this.invader.inputKeys.disableKeys();

            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

        collisionHandler (object1: any, object2: any) {
            //object1.kill();
            object2.kill();
        }

        update(){
            this.game.physics.arcade.overlap(this.mySpaceship.bullets.getObjectPhaser(), this.invader, this.collisionHandler, null, this);
            this.game.physics.arcade.overlap(this.invader.bullets.getObjectPhaser(), this.mySpaceship, this.collisionHandler, null, this);
        }

    }

}