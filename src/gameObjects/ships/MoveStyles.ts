module $MultiSpaceship$.Client {

    export class MoveStyles {
        static moveForward(object: IMobileObject){
            return function(side: string = 'right'){
                let multi = 1;
                if(side === 'right')
                    multi = 1
                else if(side === 'left')
                    multi = -1;

                object.getObjectPhaser().body.velocity.x = multi * object.velocityX;
            };
        }
    }

}