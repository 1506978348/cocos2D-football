
import { _decorator, Component, Node, Vec3, director, RigidBody2D, Vec2, animation, tween, debug } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('Player')
export class Player extends Component {

    //--for jumping--//
    private isJumping: boolean;
    private startToJump: boolean;
    private currentPos: Vec3;
    private step = 100; //one block
    private targetPos: Vec3 = new Vec3();
    private curJumpTime: number = 0;
    private jumpTime: number = 0.2;
    private jumpSpeed: number = 1000

    private originalPos: Vec3;

    //--for landing--//
    private isLanding: boolean;
    private landTime: number = 0.2;
    private curLandTime: number = 0;
    //private curLandPos: Vec3;


    start () {
        this.originalPos = new Vec3 (this.node.position.x, this.node.position.y, this.node.position.z);
    }

    update (deltaTime: number) {

        //jumping
        if (this.startToJump)
        {
            this.curJumpTime += deltaTime;
            if (this.curJumpTime > this.jumpTime)
            {
                //end
                this.node.position = this.targetPos;
                this.startToJump = false;
                this.JumpEnd();
            }
            else
            {
                //tween
                this.currentPos.y += this.jumpSpeed * deltaTime;           
                this.node.position = this.currentPos;
            }
        }    
        
        //landing
        if (this.isLanding)
        {
            this.curLandTime += deltaTime;
            if (this.curLandTime > this.landTime)
            {
                this.node.position = this.originalPos;
                this.curLandTime = 0;
            }     
        }
    }

    JumpEnd()
    {
        this.isJumping = false;

        this.scheduleOnce(function() {            
            this.isLanding = true;
        }, 0.15);  
    }

    Jump(height: number)
    {
        if (this.isJumping) { return; }

        //set current move time
        this.curJumpTime = 0;

        //set target position
        this.currentPos = new Vec3 (this.node.position.x, this.node.position.y, this.node.position.z);
        Vec3.add(this.targetPos, this.currentPos, new Vec3(0, height, 0));

        this.startToJump = true;
        this.isJumping = true;

        this.isLanding = false;
    }
}
