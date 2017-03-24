module MultiSpaceship {

    export class MoveStyles {
        static moveHorizontally(object: IMobileObject, direction: string = 'right') : Function {
            let multi = 1;
            if(direction === 'right')
                multi = 1
            else if(direction === 'left')
                multi = -1;

            object.getObjectPhaser().angle = direction === 'left' ? 180 : 0;
            object.getObjectPhaser().body.velocity.x = multi * object.velocityX;

            return function(){};
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
                object.getObjectPhaser().rotation = game.physics.arcade.angleBetween(object.getObjectPhaser(), objectDest.getObjectPhaser());
            };
        }


        static moveHorizontallyAround(game: Phaser.Game, objectDest: IMobileObject, maxDistance: number=1000, initialDirection: string='left') : Function {
            let direction = initialDirection;
            return function(object: IMobileObject){
                if( maxDistance < Math.abs(objectDest.getObjectPhaser().x - object.getObjectPhaser().x) ){
                    if(objectDest.getObjectPhaser().x > object.getObjectPhaser().x)
                        direction = 'right';
                    else
                        direction = 'left';
                }

                MoveStyles.moveHorizontally(object, direction);
            };
        }
    }

}