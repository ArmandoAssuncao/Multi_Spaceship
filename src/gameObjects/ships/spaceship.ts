module $MultiSpaceship$.Client {

    export class Spaceship extends Phaser.Sprite implements IShip {

        private _weapon: IWeapon;
        speed: number;

        inputKeys: InputKeys;

        constructor (game: Phaser.Game, x: number, y: number) {
            super(game, x, y,'ship', 1);
            this.name = 'spaceship';
            this.speed = 200;

            this.inputKeys = new InputKeys(this.game);
            this.defineKeys();

            this.create();

            this.game.add.existing(this);
        }

        get weapon(): IWeapon {
            return this._weapon;
        }

        set weapon(weapon: IWeapon){
            this._weapon = weapon;
        }

        getObjectPhaser(): Phaser.Sprite {
            return this;
        }


        create(){
            this.anchor.setTo(1, 0.5);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);

            this.body.collideWorldBounds = true;
        }

        update(){
            if (this.alive) {
                this.body.velocity.setTo(0, 0);
            }
        }

        private defineKeys(){
            this.inputKeys.moveUp = this.moveToUp;
            this.inputKeys.moveDown = this.moveToDown;
            this.inputKeys.moveLeft = this.moveToLeft;
            this.inputKeys.moveRight = this.moveToRight;
            this.inputKeys.fire = this.fire;
            this.inputKeys.rotate = this.rotate;
        }
        private moveToUp = () => {
            this.body.velocity.y = -this.speed;
        }
        private moveToDown = () => {
            this.body.velocity.y = this.speed;
        }
        private moveToLeft = () => {
            this.body.velocity.x = -this.speed;
        }
        private moveToRight = () => {
            this.body.velocity.x = this.speed;
        }
        private fire = () => {
            this._weapon.fireWeapon();
        }
        private rotate = () => {
            this.inputKeys.disableKeyD();
            this.angle += 180;
            setTimeout(() => {
                this.inputKeys.enableKeyD();
            }, 200);
        }
    }
}