module $MultiSpaceship$.Client {

    export class InputKeys {
        private _keyUp: Phaser.Key;
        private _keyDown: Phaser.Key;
        private _keyLeft: Phaser.Key;
        private _keyRight: Phaser.Key;
        private _keyS: Phaser.Key;

        private _keyUpCB: Function = null;
        private _keyDownCB: Function = null;
        private _keyLeftCB: Function = null;
        private _keyRightCB: Function = null;
        private _keySCB: Function = null;

        constructor (game: Phaser.Game) {
            // Create a key for each arrows key
            this._keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this._keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this._keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this._keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this._keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        }

        set keyUp(callback: Function){
            if(callback !== null) this._keyUpCB = callback;
            this._keyUp.onHoldCallback = this._keyUpCB;
        }
        set keyDown(callback: Function){
            if(callback !== null) this._keyDownCB = callback;
            this._keyDown.onHoldCallback = this._keyDownCB;
        }
        set keyLeft(callback: Function){
            if(callback !== null) this._keyLeftCB = callback;
            this._keyLeft.onHoldCallback = this._keyLeftCB;
        }
        set keyRight(callback: Function){
            if(callback !== null) this._keyRightCB = callback;
            this._keyRight.onHoldCallback = this._keyRightCB;
        }
        set keyS(callback: Function){
            if(callback !== null) this._keySCB = callback;
            this._keyS.onHoldCallback = this._keySCB;
        }

        enableKeys(){
            this.keyUp = this._keyUpCB;
            this.keyDown = this._keyDownCB;
            this.keyLeft = this._keyLeftCB;
            this.keyRight = this._keyRightCB;
            this.keyS = this._keySCB;
        }

        disableKeys(){
            this.keyUp = null;
            this.keyDown = null;
            this.keyLeft = null;
            this.keyRight = null;
            this.keyS = null;
        }

    }
}