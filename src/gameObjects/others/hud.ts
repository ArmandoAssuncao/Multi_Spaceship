module MultiSpaceship {

    export class HUD {

        private _health: Phaser.Graphics;
        game: Phaser.Game;
        owner: Phaser.Sprite;
        healthPercentage: number;
        x: number;
        y: number;

        constructor(game: Phaser.Game, owner: Phaser.Sprite, x: number=10, y:number=10, healthPercentage: number=100){
            this.game = game;
            this.owner = owner;
            this.x = x;
            this.y = y;
            this.healthPercentage = healthPercentage;
        }

        show(showHealth: boolean = true){
            if(showHealth){
                if(!this._health) this.createHealth();
                this._health.exists = true;
            }
        }

        hide(hideHealth: boolean = true){
            if(this._health){
                if(hideHealth) this._health.exists = false;
            }
        }

        private createHealth(){
            this._health = this.game.add.graphics(this.x, this.y);
            this._health.fixedToCamera = true;
            this.drawHealth();
        }

        private drawHealth(){
            if(this._health){
                this._health.clear();
                this._health.beginFill(undefined, 0);
                this._health.lineStyle(4, 0xCCCCFF, 0.6);
                this._health.drawRoundedRect(0, 0, 202, 22, 3);
                this._health.beginFill(0xFFFFFF, 0.6);
                this._health.lineStyle();
                this._health.drawRoundedRect(1, 1, 200 * this.healthPercentage / 100, 20, 3);
                this._health.endFill();
            }
        }

        setHealth(percentage: number) {
            this.healthPercentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
            this.drawHealth();
        }

    }
}