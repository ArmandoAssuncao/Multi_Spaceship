module $MultiSpaceship$.Client {

    export abstract class MobileObject extends Phaser.Sprite {

        velocityX: number;
        velocityY: number;
        readonly inputKeys: InputKeys;

        private _weapon: IWeapon;

        constructor (game: Phaser.Game, name: string, image: string, x: number, y: number) {
            super(game, x, y, image, 1);
            this.name = name;

            this.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.body.collideWorldBounds = true;

            this.velocityX = 200;
            this.velocityY = 200;
        }

        getObjectPhaser(): Phaser.Sprite {
            return this;
        }

        get weapon(): IWeapon {
            return this._weapon;
        }

        set weapon(weapon: IWeapon){
            this._weapon = weapon;
        }

        activeInputKeys(){
            this.inputKeys.moveUpHold = this.moveToUp;
            this.inputKeys.moveDownHold = this.moveToDown;
            this.inputKeys.moveLeftHold = this.moveToLeft;
            this.inputKeys.moveRightHold = this.moveToRight;
            this.inputKeys.rotateHold = this.rotate;
            this.inputKeys.fireHold = this.fire;

            this.inputKeys.moveUpReleased = this.moveToUpReleased;
            this.inputKeys.moveDownReleased = this.moveToDownReleased;
            this.inputKeys.moveLeftReleased = this.moveToLeftReleased;
            this.inputKeys.moveRightReleased = this.moveToRightReleased;
            this.inputKeys.rotateReleased = this.rotateReleased;
            this.inputKeys.fireReleased = this.fireReleased;
        }
        private moveToUp = () => {
            this.body.velocity.y = -this.velocityY;
        }
        private moveToDown = () => {
            this.body.velocity.y = this.velocityY;
        }
        private moveToLeft = () => {
            this.body.velocity.x = -this.velocityX;
        }
        private moveToRight = () => {
            this.body.velocity.x = this.velocityX;
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