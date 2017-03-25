module MultiSpaceship {

    export abstract class Weapon extends Phaser.Weapon  implements IWeapon {

        owner: Phaser.Sprite;
        name: string;
        damage: number;
        private _styleWeapon: Function;

        constructor(game: Phaser.Game){
            super(game, game.plugins);

            this.damage = 100;
            this.bulletSpeed = 500;
            this.fireRate = 1200;
            this.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        }

        init(owner: Phaser.Sprite, name: string, image: string){
            this.owner  = owner;
            this.name = name;
            this.styleWeapon = StylesBullet.forward(this.owner, this.bulletSpeed); //default style

            this.bulletClass = Bullet;
            this.createBullets(30, image);
            this.trackSprite(this.owner, 0, 0, true);
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

    export class Bullet extends Phaser.Bullet {

        damageBullet: number;

        constructor(game: Phaser.Game, x: number, y: number, key?: any, frame?: any){
            super(game, x, y, key, frame);
            this.damageBullet = 100;
        }
    }
}