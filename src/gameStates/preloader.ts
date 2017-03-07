module $MultiSpaceship$.Client {

    export class Preloader extends Phaser.State {
        loaderText: Phaser.Text;

        preload() {
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...",
                { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);

            this.game.load.image('bullet', '../assets/imgs/bullet.png');
            this.game.load.image('enemyBullet', '../assets/imgs/enemy-bullet.png');
            this.game.load.spritesheet('invader', '../assets/imgs/invader32x32x4.png', 32, 32);
            this.game.load.image('ship', '../assets/imgs/player.png');
            this.game.load.spritesheet('kaboom', '../assets/imgs/explode.png', 128, 128);
            this.game.load.image('starfield', '../assets/imgs/starfield.png');
        }

        create() {
            var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 200,
                Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }

    }

}