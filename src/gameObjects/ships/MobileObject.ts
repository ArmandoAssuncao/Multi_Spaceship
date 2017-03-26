module MultiSpaceship {

    export abstract class MobileObject extends Phaser.Sprite implements IMobileObject {

        velocityX: number;
        velocityY: number;
        private _moveStyle: Function = ()=>{};
        private _inputKeys: InputKeys;
        private _weapon: IWeapon;
        private _hud: HUD;

        constructor (game: Phaser.Game, name: string, imageKey: string, x: number, y: number) {
            super(game, x, y, imageKey, 1);
            this.name = name;
            this.health = 200;
            this.maxHealth = 200;
            this.velocityX = 200;
            this.velocityY = 200;

            this.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.body.collideWorldBounds = true;

            this.events.onKilled.add(() => {
                if(this._weapon) this._weapon.getObjectPhaser().autofire = false;
            });

            this.events.onRevived.add(() => {
                if(this._weapon) this._weapon.getObjectPhaser().autofire = true;
            });

            this.events.onDestroy.add(() => {
                if(this._weapon) this._weapon.getObjectPhaser().destroy();
                if(this._moveStyle) this._moveStyle = null;
            });
        }

        getObjectPhaser(): Phaser.Sprite {
            return this;
        }

        get moveStyle(): Function {
            return this._moveStyle;
        }
        set moveStyle(moveStyle: Function){
            this._moveStyle = moveStyle;
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

        activeHUD(x?: number, y?: number){
            if(!this._hud){
                this._hud = new HUD(this.game, this, x, y);
                this._hud.show();
            }
        }

        damage(amount: number): Phaser.Sprite {
            let sprite = super.damage(amount);
            if(this._hud) this._hud.setHealth(this.health * 100 / this.maxHealth);
            return sprite;
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

        update(){
            this._moveStyle(this);
        }
    }
}