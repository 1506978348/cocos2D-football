
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('BackgroundRolling')
export class BackgroundRolling extends Component {

    private speed: number = 250;
    private leftScreen: number = -1070;

    @property
    rightScreen = 1070;

    private curPosition: Vec3;

    public isRunning: boolean = true;

    start () {
        this.curPosition = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
    }

    update (deltaTime: number) {
        
        if (this.isRunning)
        {
            this.curPosition.x -= this.speed * deltaTime;
       
            if (this.curPosition.x < this.leftScreen)
            {
                this.curPosition.x = this.rightScreen;
            }
    
            this.node.position = this.curPosition;
        }
    }
}

