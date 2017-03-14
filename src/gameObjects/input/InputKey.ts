module $MultiSpaceship$.Client {

    export class InputKeys {
        private _moveUp: Phaser.Key;
        private _moveDown: Phaser.Key;
        private _moveLeft: Phaser.Key;
        private _moveRight: Phaser.Key;
        private _fire: Phaser.Key;
        private _rotate: Phaser.Key;

        constructor (game: Phaser.Game) {
            this._moveUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this._moveDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this._moveLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this._moveRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this._fire = game.input.keyboard.addKey(Phaser.Keyboard.S);
            this._rotate = game.input.keyboard.addKey(Phaser.Keyboard.D);
        }

        set moveUp(callback: Function){
            this._moveUp.onHoldCallback = callback;
        }
        set moveDown(callback: Function){
            this._moveDown.onHoldCallback = callback;
        }
        set moveLeft(callback: Function){
            this._moveLeft.onHoldCallback = callback;
        }
        set moveRight(callback: Function){
            this._moveRight.onHoldCallback = callback;
        }
        set fire(callback: Function){
            this._fire.onHoldCallback = callback;
        }
        set rotate(callback: Function){
            this._rotate.onHoldCallback = callback;
        }


        set moveUpReleased(callback: Function){
            this._moveUp.onUp.removeAll();
            if(typeof callback === 'function') this._moveUp.onUp.add(callback);
        }
        set moveDownReleased(callback: Function){
            this._moveDown.onUp.removeAll();
            if(typeof callback === 'function') this._moveDown.onUp.add(callback);
        }
        set moveLeftReleased(callback: Function){
            this._moveLeft.onUp.removeAll();
            if(typeof callback === 'function') this._moveLeft.onUp.add(callback);
        }
        set moveRightReleased(callback: Function){
            this._moveRight.onUp.removeAll();
            if(typeof callback === 'function') this._moveRight.onUp.add(callback);
        }
        set fireReleased(callback: Function){
            this._fire.onUp.removeAll();
            if(typeof callback === 'function') this._fire.onUp.add(callback);
        }
        set rotateReleased(callback: Function){
            this._rotate.onUp.removeAll();
            if(typeof callback === 'function') this._rotate.onUp.add(callback);
        }

        enableKeys(){
            this._moveUp.enabled = true;
            this._moveDown.enabled = true;
            this._moveLeft.enabled = true;
            this._moveRight.enabled = true;
            this._fire.enabled = true;
            this._rotate.enabled = true;
        }

        disableKeys(){
            this._moveUp.enabled = false;
            this._moveDown.enabled = false;
            this._moveLeft.enabled = false;
            this._moveRight.enabled = false;
            this._fire.enabled = false;
            this._rotate.enabled = false;
        }

        enableRotate(){
            this._rotate.enabled = true;
        }
        disableRotate(){
            this._rotate.enabled = false;
        }

    }
}