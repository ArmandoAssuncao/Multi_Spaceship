module $MultiSpaceship$.Client {

    export class InputKeys {
        private _keyUp: Phaser.Key;
        private _keyDown: Phaser.Key;
        private _keyLeft: Phaser.Key;
        private _keyRight: Phaser.Key;
        private _keyS: Phaser.Key;
        private _keyD: Phaser.Key;

        private _keyUpCB: Function = null;
        private _keyDownCB: Function = null;
        private _keyLeftCB: Function = null;
        private _keyRightCB: Function = null;
        private _keySCB: Function = null;
        private _keyDCB: Function = null;

        constructor (game: Phaser.Game) {
            // Create a key for each arrows key
            this._keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this._keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this._keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this._keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this._keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
            this._keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        }

        set keyUp(callback: Function){
            if(callback !== null) this._keyUpCB = callback;
            this._keyUp.onHoldCallback = callback;
        }
        set keyDown(callback: Function){
            if(callback !== null) this._keyDownCB = callback;
            this._keyDown.onHoldCallback = callback;
        }
        set keyLeft(callback: Function){
            if(callback !== null) this._keyLeftCB = callback;
            this._keyLeft.onHoldCallback = callback;
        }
        set keyRight(callback: Function){
            if(callback !== null) this._keyRightCB = callback;
            this._keyRight.onHoldCallback = callback;
        }
        set keyS(callback: Function){
            if(callback !== null) this._keySCB = callback;
            this._keyS.onHoldCallback = callback;
        }
        set keyD(callback: Function){
            if(callback !== null) this._keyDCB = callback;
            this._keyD.onHoldCallback = callback;
        }

        enableKeys(){
            this.keyUp = this._keyUpCB;
            this.keyDown = this._keyDownCB;
            this.keyLeft = this._keyLeftCB;
            this.keyRight = this._keyRightCB;
            this.keyS = this._keySCB;
            this.keyD = this._keyDCB;
        }

        disableKeys(){
            this.keyUp = null;
            this.keyDown = null;
            this.keyLeft = null;
            this.keyRight = null;
            this.keyS = null;
            this.keyD = null;
        }

        enableKeyD(){
            this.keyD = this._keyDCB;
        }
        disableKeyD(){
            this.keyD = null;
        }

    }
}