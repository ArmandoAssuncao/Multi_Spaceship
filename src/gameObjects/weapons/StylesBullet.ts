module MultiSpaceship {

    export class StylesBullet {
        static toObject(game:Phaser.Game, sender: Phaser.Sprite, destination: Phaser.Sprite, speed?: number){
            return function(bullet: Phaser.Sprite){
                bullet.reset(sender.x, sender.y);
                bullet.rotation = game.physics.arcade.angleBetween(sender, destination);
                game.physics.arcade.moveToObject(bullet, destination, speed);
            };
        }

        static forward(sender: Phaser.Sprite, speed: number){
            return function(bullet: Phaser.Sprite){
                bullet.reset(sender.x, sender.y);
                bullet.angle  = sender.angle;
                this.game.physics.arcade.velocityFromAngle(sender.angle, speed, bullet.body.velocity);
            }
        }
    }

}