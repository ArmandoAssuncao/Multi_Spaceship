module $MultiSpaceship$.Client {

    export class MoveStyles {
        static moveHorizontally(direction: string = 'right') : Function {
            let multi = 1;
            if(direction === 'right')
                multi = 1
            else if(direction === 'left')
                multi = -1;
            return function(object: IMobileObject){
                object.getObjectPhaser().body.velocity.x = multi * object.velocityX;
            };
        }

        static moveNearObject(game: Phaser.Game, objectDest: IMobileObject, distance: number) : Function {
            return function(object: IMobileObject){
                if( distance >= game.physics.arcade.distanceBetween(object.getObjectPhaser(), objectDest.getObjectPhaser()) ){
                    object.getObjectPhaser().body.velocity.x = 0;
                    object.getObjectPhaser().body.velocity.y = 0;
                }
                else{
                    let angle = Math.atan2(objectDest.getObjectPhaser().y - object.getObjectPhaser().y, objectDest.getObjectPhaser().x - object.getObjectPhaser().x);
                    object.getObjectPhaser().body.velocity.x = Math.cos(angle) * object.velocityX;
                    object.getObjectPhaser().body.velocity.y = Math.sin(angle) * object.velocityY;
                }
            };
        }
    }

}