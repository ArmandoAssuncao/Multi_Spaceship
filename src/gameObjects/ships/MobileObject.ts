module $MultiSpaceship$.Client {

    export abstract class MobileObject extends Phaser.Sprite implements IMobileObject {

        velocityX: number;
        velocityY: number;
        private _inputKeys: InputKeys;
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

        get inputKeys():InputKeys {
            return this._inputKeys;
        }

        get weapon(): IWeapon {
            return this._weapon;
        }

        set weapon(weapon: IWeapon){
            this._weapon = weapon;
        }

        activeInputKeys(){
            if(typeof this._inputKeys === 'undefined' || this._inputKeys === null)
                this._inputKeys = new InputKeys(this.game);

            this._inputKeys.moveUpHold = this.moveToUp;
            this._inputKeys.moveDownHold = this.moveToDown;
            this._inputKeys.moveLeftHold = this.moveToLeft;
            this._inputKeys.moveRightHold = this.moveToRight;
            this._inputKeys.rotateHold = this.rotate;
            this._inputKeys.fireHold = this.fire;

            this._inputKeys.moveUpReleased = this.moveToUpReleased;
            this._inputKeys.moveDownReleased = this.moveToDownReleased;
            this._inputKeys.moveLeftReleased = this.moveToLeftReleased;
            this._inputKeys.moveRightReleased = this.moveToRightReleased;
            this._inputKeys.rotateReleased = this.rotateReleased;
            this._inputKeys.fireReleased = this.fireReleased;
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
        private rotate = () => {
            this._inputKeys.disableRotate();
            this.angle += 180;
            setTimeout(() => {
                this._inputKeys.enableRotate();
            }, 200);
        }
        private fire = () => {
            this._weapon.fireWeapon();
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