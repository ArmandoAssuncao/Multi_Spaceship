module MultiSpaceship {

    export class Level01 extends Phaser.State {

        background: Phaser.TileSprite;
        music: Phaser.Sound;
        mySpaceship: Spaceship;
        groupSpaceship02: Phaser.Group;
        groupSpaceship03: Phaser.Group;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.world.setBounds(0, 0, 10000, this.game.height);

            //background
            this.background = this.game.add.tileSprite(0, 0, this.world.bounds.width, this.world.bounds.height, 'starfield');
            var imageBg = this.game.cache.getImage(this.background.key.toString());
            this.background.tileScale.x = this.game.width / imageBg.width;
            this.background.tileScale.y = this.game.height / imageBg.height;
            this.background.autoScroll(-80, 0);

            //player
            this.mySpaceship = new Spaceship(this.game, this.world.centerX, this.world.centerY);
            this.mySpaceship.activeInputKeys();
            this.mySpaceship.weapon = this.game.plugins.add(PlasmaWeapon, this.mySpaceship);
            this.mySpaceship.weapon.styleWeapon = StylesBullet.forward(this.mySpaceship, this.mySpaceship.weapon.getObjectPhaser().bulletSpeed);
            this.game.camera.follow(this.mySpaceship);
            this.mySpaceship.activeHUD();

            this.generateEnemy();

            this.game.time.advancedTiming = true;
        }

        render(){
            //this.game.debug.spriteBounds(this.mySpaceship);
            // this.game.debug.spriteCoords(this.mySpaceship, 20, 32);
            // this.mySpaceship.weapon.getObjectPhaser().debug(400, 32);
            //game.debug.spriteCorners(sprite, true, true);
            //this.game.debug.text(this.mySpaceship.cameraOffset.x + ' '+ this.mySpaceship.cameraOffset.y, 500, 20);
            //this.game.debug.text(JSON.stringify(this.game.camera.atLimit), 20, 20);
            this.game.debug.text(this.game.time.fps.toString(), 2, 14, "#00ff00");
        }

        update(){
            this.game.physics.arcade.overlap(this.mySpaceship, [this.groupSpaceship02, this.groupSpaceship03], this.collisionOfSpaceships, null, this);
            this.game.physics.arcade.overlap([this.groupSpaceship02, this.groupSpaceship03], this.mySpaceship.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);

            this.groupSpaceship02.forEach((child: IMobileObject)=>{
                this.game.physics.arcade.overlap(this.mySpaceship, child.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);
            }, this);
            this.groupSpaceship03.forEach((child: IMobileObject)=>{
                this.game.physics.arcade.overlap(this.mySpaceship, child.weapon.getObjectPhaser().bullets, this.collisionOfSpaceshipAndBullet, null, this);
            }, this);
        }

        collisionOfSpaceships(spaceship1: IMobileObject, spaceship2: IMobileObject) {
            spaceship1.getObjectPhaser().kill();
            spaceship2.getObjectPhaser().kill();
        }

        collisionOfSpaceshipAndBullet(spaceship: IMobileObject, bullet: Bullet) {
            spaceship.damage(bullet.damageBullet);
            bullet.kill();
        }

        generateEnemy(){
            this.groupSpaceship02 = this.game.add.group();
            for (var i = 0; i < 5; i++) {
                let invader = new Spaceship02(this.game, this.world.randomX, this.world.randomY);
                invader.moveStyle = MoveStyles.moveNearObject(this.game, this.mySpaceship, 400);
                invader.weapon = this.game.plugins.add(BallWeapon, invader);
                invader.weapon.styleWeapon = StylesBullet.toObject(this.game, invader, this.mySpaceship, invader.weapon.getObjectPhaser().bulletSpeed);
                this.groupSpaceship02.add(invader);
            }

            this.groupSpaceship03 = this.game.add.group();
            let pointY = this.world.randomY;
            for (var i = 0; i < 5; i++) {
                let invader = new Spaceship03(this.game, this.mySpaceship.x + this.game.width + 90*i, pointY + 70*i);
                invader.moveStyle = MoveStyles.moveHorizontallyAround(this.game, this.mySpaceship, 1500, 'left');
                invader.weapon = this.game.plugins.add(BallWeapon, invader);
                invader.weapon.styleWeapon = StylesBullet.toObject(this.game, invader, this.mySpaceship, invader.weapon.getObjectPhaser().bulletSpeed);
                this.groupSpaceship03.add(invader);
            }
        }
    }

}