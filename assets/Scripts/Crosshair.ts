
import { _decorator, Component, Animation, Node, Prefab, instantiate, Vec3, Collider2D, Contact2DType, RigidBody2D, SystemEventType, systemEvent, SystemEvent, EventMouse, CircleCollider2D, director, animation } from 'cc';
import { BackgroundRolling } from './BackgroundRolling';
import { Ball } from "./Ball";
import { GameController } from './GameController';
import { Player } from './Player';
const { ccclass, property } = _decorator;
 
@ccclass('Crosshair')
export class Crosshair extends Component {

    @property({type: Prefab})
    public ballPrefab: Prefab|null = null;

    @property({type: Node})
    public goal: Node|null = null;

    @property({type: Node})
    public perfect: Node|null = null;

    @property({type: Node})
    public player: Node|null = null;

    @property({type: Animation})
    playerAnim: Animation=null!;

    @property({type: animation.AnimationController})
    controller: animation.AnimationController=null!;

    newBall: Node;

    //spawn ball and store in a node
    start () 
    {
        this.newBall = this.spawnNewBall();  
    }

    //calculate to see if the ball is within the range of the crosshair
    CalculateDistance()
    {
        let distance = 
        Math.sqrt((this.newBall.position.x - this.node.position.x)*(this.newBall.position.x - this.node.position.x) + 
        (this.newBall.position.y - this.node.position.y)*(this.newBall.position.y - this.node.position.y));

        //if ball is within radius - hit
        if (distance < this.node.getComponent(CircleCollider2D).radius)
        {
            //player jump
            if (this.newBall.position.y > 150)
            {
                this.player.getComponent(Player).Jump(this.newBall.position.y - this.player.position.y);
            }

            //play shoot anim
            this.playerAnim.play('kicking');

            //ball is hit and add score
            this.newBall.getComponent(Ball).ballHit();
            GameController.Instance.AddScore();
            
            if (distance < this.node.getComponent(CircleCollider2D).radius/2)
            {
                //turn on goal art
                this.perfect.active = true;
                this.scheduleOnce(function() {            
                    this.perfect.active = false;
                }, 0.5);  
            }

            //turn on goal art
            this.goal.active = true;
            this.scheduleOnce(function() {            
                this.goal.active = false;
            }, 0.5);  

        }

        //else, fall
        else 
        {
            //fall anim and disable animation
            this.controller.setValue('fall', true);
            this.playerAnim.play('falling');
            this.playerAnim.pause();
            
            //load play again scene
            this.scheduleOnce(function() {
                director.loadScene('over')
            }, 0.6);        
        }
    }

    //update crosshair position based on ball
    update (deltaTime: number) {
        let crosshairPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        crosshairPos.y = this.newBall.position.y;
        this.node.position = crosshairPos;
        
    }

    //instantiate new ball at random position from 50 to 500 y axis
    spawnNewBall()
    {
        let newBall = instantiate(this.ballPrefab);
        newBall.parent = this.node.parent;
        newBall.position = new Vec3(600, Math.random()*500 + 50, this.node.position.z);

        return newBall;
    }

}


