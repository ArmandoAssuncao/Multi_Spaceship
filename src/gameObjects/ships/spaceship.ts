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
            this.anchor.setTo(0.5, 0.5);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);

            this.body.collideWorldBounds = true;
        }

        update(){
            if (this.alive) {
                this.body.velocity.setTo(0, 0);
            }
        }

        private defineKeys(){
            this.inputKeys.keyUp = this.moveToUp;
            this.inputKeys.keyDown = this.moveToDown;
            this.inputKeys.keyLeft = this.moveToLeft;
            this.inputKeys.keyRight = this.moveToRight;
            this.inputKeys.keyS = this.fire;
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
    }
}