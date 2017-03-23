module $MultiSpaceship$.Client {

    export class Preloader extends Phaser.State {
        loaderText: Phaser.Text;

        preload() {
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...",
                { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);

            this.game.load.image('bullet', '../assets/imgs/bullet.png');
            this.game.load.image('enemyBullet', '../assets/imgs/enemy-bullet.png');
            this.game.load.image('invader', '../assets/imgs/invader.png');
            this.game.load.image('ship', '../assets/imgs/player.png');
            this.game.load.image('starfield', '../assets/imgs/starfield.jpg');
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