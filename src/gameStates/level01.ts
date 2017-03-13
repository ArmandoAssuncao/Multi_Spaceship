module $MultiSpaceship$.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: Player;
        mySpaceship: Spaceship;
        groupSpaceship02: Phaser.Group;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.world.setBounds(0, 0, 2000, this.game.height);

            this.background = this.game.add.tileSprite(0, 0, this.world.bounds.width, this.world.bounds.height, 'starfield');

            var imageBg = this.game.cache.getImage(this.background.key.toString());
            this.background.tileScale.x = this.world.width / imageBg.width;
            this.background.tileScale.y = this.world.height / imageBg.height;
            this.background.autoScroll(-80, 0);

            this.mySpaceship = new Spaceship(this.game, this.world.centerX, this.world.centerY);
            this.mySpaceship.weapon = new LaserWeapon(this.game, this.mySpaceship);
            this.mySpaceship.weapon.styleWeapon = StylesBullet.forward(this.mySpaceship, this.mySpaceship.weapon.getObjectPhaser().bulletSpeed);

            this.game.camera.follow(this.mySpaceship);

            this.groupSpaceship02 = this.game.add.group();
            for (var i = 0; i < 10; i++) {
                let invader = new Spaceship02(this.game, this.world.randomX, this.world.randomY);
                invader.weapon = new BallWeapon(this.game, this.mySpaceship);
                invader.weapon.styleWeapon = StylesBullet.toObject(this.game, invader, this.mySpaceship, invader.weapon.getObjectPhaser().bulletSpeed);

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
            this.game.physics.arcade.overlap(this.groupSpaceship02, this.mySpaceship.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);

            this.groupSpaceship02.forEach((child: IShip)=>{
                this.game.physics.arcade.overlap(this.mySpaceship, child.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);
            }, this);
        }

        render(){
            //this.game.debug.spriteBounds(this.mySpaceship);
            // this.game.debug.spriteCoords(this.mySpaceship, 20, 32);
            // this.mySpaceship.weapon.getObjectPhaser().debug(400, 32);
            //game.debug.spriteCorners(sprite, true, true);
        }

    }

}