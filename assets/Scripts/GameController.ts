
import { _decorator, Component, Node, RichText, director } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('GameController')
export class GameController extends Component {

    public static Instance: GameController = null;


    @property({type: RichText})
    public score: RichText|null = null;

    @property
    public myScore = 0;

    start () {
        GameController.Instance = this;
        this.score.string = 'Score: ' + this.myScore.toString();

    }

    AddScore() 
    {
        this.myScore+= 1;
        this.score.string = 'Score: ' + this.myScore.toString();

        return this.myScore;
    }

    LoadGame()
    {
        director.loadScene('main');
    }
}

