
import { _decorator, Component, Node, Animation, animation } from 'cc';
import { Crosshair } from './Crosshair';
const { ccclass, property } = _decorator;
 
@ccclass('Touch')
export class Touch extends Component {
    
    @property({type: Crosshair})
    public crossHair: Crosshair|null = null;


    //when touch, play anim and calculate to see if the ball is within the range
    start () {
        
        this.node.on(Node.EventType.TOUCH_START, (event: any) => 
        {
            this.crossHair.getComponent(Crosshair).CalculateDistance();

        }, this);

    }

}

