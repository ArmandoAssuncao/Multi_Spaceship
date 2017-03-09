module $MultiSpaceship$.Client {

    export class StylesBullet {
        static toObject(game:Phaser.Game, sender: Phaser.Sprite, destination: Phaser.Sprite, speed?: number){
            return function(bullet: Phaser.Sprite){
                bullet.reset(sender.x, sender.y);
                game.physics.arcade.moveToObject(bullet, destination, speed);
            };
        }

        static forward(sender: Phaser.Sprite, speed: number){
            return function(bullet: Phaser.Sprite){
                bullet.reset(sender.x, sender.y + 8);
                bullet.body.velocity.x = speed;
            }
        }
    }

}