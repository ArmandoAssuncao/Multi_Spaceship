module $MultiSpaceship$.Client {

    export class LaserWeapon extends Phaser.Weapon implements IWeapon {

        owner: Phaser.Sprite;
        name: string;
        damage: number;
        styleBullet: Function;

        constructor(game: Phaser.Game, owner: Phaser.Sprite) {
            super(game, new Phaser.PluginManager(game));
            this.owner = owner;
            this.name = 'LaserWeapon';
            this.damage = 50;
            this.bulletSpeed = 200;
            this.fireRate = 100;
            this.bulletKillDistance = 400;
            this.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
            //this.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

            this.styleBullet = StylesBullet.forward(owner, this.bulletSpeed); //default style
            this.setStyleBullet(this.styleBullet);

            this.createBullets(30, 'bullet');
            this.trackSprite(owner, 0, 0, true);

            this.owner.body.angularVelocity = -200; //DELETE
        }

        getObjectPhaser(): Phaser.Weapon {
            return this;
        }

        setStyleBullet(styleBullet: Function ): void {
            this.styleBullet = styleBullet;

            let signal = new Phaser.Signal();
            signal.add(this.styleBullet, this);
            this.onFire = signal;
        }

    }
}