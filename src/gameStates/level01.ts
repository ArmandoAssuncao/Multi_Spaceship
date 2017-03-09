﻿module $MultiSpaceship$.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: Player;
        mySpaceship: Spaceship;
        groupSpaceship02: Phaser.Group;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'starfield');

            var imageBg = this.game.cache.getImage(this.background.key.toString());
            this.background.tileScale.x = this.world.width / imageBg.width;
            this.background.tileScale.y = this.world.height / imageBg.height;
            this.background.autoScroll(-80, 0);


            this.mySpaceship = new Spaceship(this.game, this.world.centerX, this.world.centerY);
            this.mySpaceship.bullets = new LaserBullet(this.game, this.mySpaceship);

            this.groupSpaceship02 = this.game.add.group();

            for (var i = 0; i < 10; i++) {
                let invader = new Spaceship02(this.game, this.world.randomX, this.world.randomY);
                let ballBullet = new BallBullet(this.game, invader);
                ballBullet.styleBullet = StylesBullet.toObject(this.game, invader, this.mySpaceship, ballBullet.speed);
                invader.bullets = ballBullet;

                this.groupSpaceship02.add(invader);
            }

            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

        collisionOfSpaceships(spaceship1: IShip, spaceship2: IShip) {
            spaceship1.getObjectPhaser().kill();
            spaceship2.getObjectPhaser().kill();
        }

        collisionOfSpaceshipAndBullet(spaceship: IShip, bullet: Phaser.Sprite) {
            spaceship.getObjectPhaser().kill();
            bullet.kill();
        }

        update(){
            this.game.physics.arcade.overlap(this.mySpaceship, this.groupSpaceship02, this.collisionOfSpaceships, null, this);
            this.game.physics.arcade.overlap(this.groupSpaceship02, this.mySpaceship.bullets, this.collisionOfSpaceshipAndBullet, null, this);

            this.groupSpaceship02.forEach((child: IShip)=>{
                this.game.physics.arcade.overlap(this.mySpaceship, child.bullets, this.collisionOfSpaceshipAndBullet, null, this);
            }, this);
        }

    }

}