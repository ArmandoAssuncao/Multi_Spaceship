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

            //background
            this.background = this.game.add.tileSprite(0, 0, this.world.bounds.width, this.world.bounds.height, 'starfield');
            var imageBg = this.game.cache.getImage(this.background.key.toString());
            this.background.tileScale.x = this.game.width / imageBg.width;
            this.background.tileScale.y = this.game.height / imageBg.height;
            this.background.autoScroll(-80, 0);

            //player
            this.mySpaceship = new Spaceship(this.game, this.world.centerX, this.world.centerY);
            this.mySpaceship.activeInputKeys();
            this.mySpaceship.weapon = new LaserWeapon(this.game, this.mySpaceship);
            this.mySpaceship.weapon.styleWeapon = StylesBullet.forward(this.mySpaceship, this.mySpaceship.weapon.getObjectPhaser().bulletSpeed);
            this.game.camera.follow(this.mySpaceship);

            this.generateEnemy();

            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

        render(){
            //this.game.debug.spriteBounds(this.mySpaceship);
            // this.game.debug.spriteCoords(this.mySpaceship, 20, 32);
            // this.mySpaceship.weapon.getObjectPhaser().debug(400, 32);
            //game.debug.spriteCorners(sprite, true, true);
            //this.game.debug.text(this.mySpaceship.cameraOffset.x + ' '+ this.mySpaceship.cameraOffset.y, 500, 20);
            //this.game.debug.text(JSON.stringify(this.game.camera.atLimit), 20, 20);
        }

        update(){
            this.game.physics.arcade.overlap(this.mySpaceship, this.groupSpaceship02, this.collisionOfSpaceships, null, this);
            this.game.physics.arcade.overlap(this.groupSpaceship02, this.mySpaceship.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);

            this.groupSpaceship02.forEach((child: IMobileObject)=>{
                this.game.physics.arcade.overlap(this.mySpaceship, child.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);
            }, this);
        }

        collisionOfSpaceships(spaceship1: IMobileObject, spaceship2: IMobileObject) {
            spaceship1.getObjectPhaser().kill();
            spaceship2.getObjectPhaser().kill();
        }

        collisionOfSpaceshipAndBullet(spaceship: IMobileObject, bullet: Phaser.Sprite) {
            spaceship.getObjectPhaser().kill();
            bullet.kill();
        }

        generateEnemy(){
            this.groupSpaceship02 = this.game.add.group();
            for (var i = 0; i < 10; i++) {
                let invader = new Spaceship02(this.game, this.world.randomX, this.world.randomY);
                invader.weapon = new BallWeapon(this.game, invader);
                invader.weapon.styleWeapon = StylesBullet.toObject(this.game, invader, this.mySpaceship, invader.weapon.getObjectPhaser().bulletSpeed);
                this.groupSpaceship02.add(invader);
            }
        }
    }

}