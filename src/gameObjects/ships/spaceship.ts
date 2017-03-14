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

        }

        private defineKeys(){
            this.inputKeys.moveUp = this.moveToUp;
            this.inputKeys.moveDown = this.moveToDown;
            this.inputKeys.moveLeft = this.moveToLeft;
            this.inputKeys.moveRight = this.moveToRight;
            this.inputKeys.fire = this.fire;
            this.inputKeys.rotate = this.rotate;

            this.inputKeys.moveUpReleased = this.moveToUpReleased;
            this.inputKeys.moveDownReleased = this.moveToDownReleased;
            this.inputKeys.moveLeftReleased = this.moveToLeftReleased;
            this.inputKeys.moveRightReleased = this.moveToRightReleased;
            //this.inputKeys.fireReleased = this.fireReleased;
            //this.inputKeys.rotateReleased = this.rotateReleased;
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
            this.inputKeys.disableRotate();
            this.angle += 180;
            setTimeout(() => {
                this.inputKeys.enableRotate();
            }, 200);
        }

        private moveToUpReleased = () => {
            this.body.velocity.y = 0;
        }
        private moveToDownReleased = () => {
            this.body.velocity.y = 0;
        }
        private moveToLeftReleased = () => {
            this.body.velocity.x = 0;
        }
        private moveToRightReleased = () => {
            this.body.velocity.x = 0;
        }
        private fireReleased = () => {
        }
        private rotateReleased = () => {
        }
    }
}