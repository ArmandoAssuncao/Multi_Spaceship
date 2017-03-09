module $MultiSpaceship$.Client {

    export class BallBullet extends Phaser.Group implements IBullet {

        owner: Phaser.Sprite;
        damage: number;
        speed: number;
        fireRate: number;
        bulletTime: number;
        styleBullet: Function;

        constructor(game: Phaser.Game, owner: Phaser.Sprite) {
            super(game, undefined, 'BallBulletGroup', false, true, Phaser.Physics.ARCADE);
            this.owner = owner;
            this.name = 'BallBullet';
            this.damage = 50;
            this.speed = 400;
            this.fireRate = 200;
            this.bulletTime = 0;

            this.styleBullet = StylesBullet.forward(owner, this.speed); //default

            this.createMultiple(30, 'enemyBullet');
            this.setAll('anchor.x', 0.5);
            this.setAll('anchor.y', 1);
            this.setAll('outOfBoundsKill', true);
            this.setAll('checkWorldBounds', true);
        }

        fire() {
            if (this.game.time.now > this.bulletTime) {
                var bullet = this.getFirstExists(false);

                if (bullet) {
                    this.styleBullet(bullet);
                    this.bulletTime = this.game.time.now + this.fireRate;
                }
            }
        }

        getObjectPhaser(): this {
            return this;
        }

    }
}