
import { _decorator, Component, Node, Vec2, Prefab, Vec3, Contact2DType, Collider2D, CircleCollider2D, systemEvent, SystemEventType, director, IPhysics2DContact, EventMouse } from 'cc';
import { Crosshair } from './Crosshair';
const { ccclass, property } = _decorator;

 
@ccclass('Ball')
export class Ball extends Component {
    
    private moveDown: boolean;
    private isHit: boolean;

    @property
    horizontalSpeed = 700;

    @property
    verticalSpeed = 400;

    private _hitSpeedX: number = 800;
    private _hitSpeedY: number = 200;

    private width: number = 600;
    private playerX: number = -400;

    private max: number;
    private ballPos: Vec3;

    start () {
        this.moveDown = true;
        this.isHit = false;

        this.ballPos = new Vec3 (this.node.position.x, this.node.position.y, this.node.position.z);
        this.max = this.ballPos.y;
    }

    //when ball hit the crosshair
    ballHit()
    {
        this.isHit = true;
    }


    update (deltaTime: number) {  
        //if ball is not hit
        if (this.isHit == false)     
        {
            //if ball falls down
            if (this.moveDown == true)
            {
                //set speed for ball to fall down
                this.ballPos.x -= this.horizontalSpeed * deltaTime;
                this.ballPos.y -= this.verticalSpeed * deltaTime;
                //if ball hits ground - bounce up
                if (this.ballPos.y < 0)
                {
                    this.moveDown = false;
                }
                if (this.ballPos.x < this.playerX)
                {
                    director.loadScene("over");
                }
                this.node.position = this.ballPos;
            }

            //if ball bounces up
            else
            {
                this.ballPos.x -= this.horizontalSpeed * deltaTime;
                this.ballPos.y += this.verticalSpeed * deltaTime;
                //ball moves down again when hit max value
                if (this.ballPos.y > this.max)
                {
                    this.moveDown = true;
                }
                if (this.ballPos.x < this.playerX)
                {
                    director.loadScene("over");
                }
                this.node.position = this.ballPos;
            }
        }

        //if ball is hit
        if (this.isHit == true)
        {
            this.ballPos.x += this._hitSpeedX * deltaTime;
            this.ballPos.y += this._hitSpeedY * deltaTime;
            if (this.ballPos.x > this.width)
            {
                this.isHit = false;
                this.ballPos.y = Math.random() * 500 + 50;
            }
            this.node.position = this.ballPos;
            this.max = this.ballPos.y;
        }
        
    }
}
