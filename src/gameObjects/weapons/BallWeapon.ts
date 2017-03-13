module $MultiSpaceship$.Client {

    export class BallWeapon extends Phaser.Weapon implements IWeapon {

        owner: Phaser.Sprite;
        name: string;
        damage: number;
        private _styleWeapon: Function;

        constructor(game: Phaser.Game, owner: Phaser.Sprite) {
            super(game, new Phaser.PluginManager(game));
            this.owner = owner;
            this.name = 'BallWeapon';
            this.damage = 50;
            this.bulletSpeed = 800;
            this.fireRate = 50;
            this.bulletKillDistance = 1000;
            this.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
            //this.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

            this.styleWeapon = StylesBullet.forward(owner, this.bulletSpeed); //default style

            this.createBullets(30, 'enemyBullet');
            this.trackSprite(owner, 0, 0, true);
        }

        getObjectPhaser(): Phaser.Weapon {
            return this;
        }

        get styleWeapon(): Function {
            return this._styleWeapon;
        }
        set styleWeapon(styleWeapon: Function){
            this._styleWeapon = styleWeapon;

            let signal = new Phaser.Signal();
            signal.add(this._styleWeapon, this);
            this.onFire = signal;
        }

        fireWeapon(){
            this.fire();
        }

    }
}