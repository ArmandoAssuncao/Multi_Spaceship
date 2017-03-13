module $MultiSpaceship$.Client {

    export class InputKeys {
        private _moveUp: Phaser.Key;
        private _moveDown: Phaser.Key;
        private _moveLeft: Phaser.Key;
        private _moveRight: Phaser.Key;
        private _fire: Phaser.Key;
        private _rotate: Phaser.Key;

        private _moveUpCB: Function = null;
        private _moveDownCB: Function = null;
        private _moveLeftCB: Function = null;
        private _moveRightCB: Function = null;
        private _fireCB: Function = null;
        private _rotateCB: Function = null;

        constructor (game: Phaser.Game) {
            // Create a key for each arrows key
            this._moveUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this._moveDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this._moveLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this._moveRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this._fire = game.input.keyboard.addKey(Phaser.Keyboard.S);
            this._rotate = game.input.keyboard.addKey(Phaser.Keyboard.D);
        }

        set moveUp(callback: Function){
            if(callback !== null) this._moveUpCB = callback;
            this._moveUp.onHoldCallback = callback;
        }
        set moveDown(callback: Function){
            if(callback !== null) this._moveDownCB = callback;
            this._moveDown.onHoldCallback = callback;
        }
        set moveLeft(callback: Function){
            if(callback !== null) this._moveLeftCB = callback;
            this._moveLeft.onHoldCallback = callback;
        }
        set moveRight(callback: Function){
            if(callback !== null) this._moveRightCB = callback;
            this._moveRight.onHoldCallback = callback;
        }
        set fire(callback: Function){
            if(callback !== null) this._fireCB = callback;
            this._fire.onHoldCallback = callback;
        }
        set rotate(callback: Function){
            if(callback !== null) this._rotateCB = callback;
            this._rotate.onHoldCallback = callback;
        }

        enableKeys(){
            this.moveUp = this._moveUpCB;
            this.moveDown = this._moveDownCB;
            this.moveLeft = this._moveLeftCB;
            this.moveRight = this._moveRightCB;
            this.fire = this._fireCB;
            this.rotate = this._rotateCB;
        }

        disableKeys(){
            this.moveUp = null;
            this.moveDown = null;
            this.moveLeft = null;
            this.moveRight = null;
            this.fire = null;
            this.rotate = null;
        }

        enableKeyD(){
            this.rotate = this._rotateCB;
        }
        disableKeyD(){
            this.rotate = null;
        }

    }
}