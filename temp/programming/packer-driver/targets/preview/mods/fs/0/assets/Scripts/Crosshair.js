System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Animation, Node, Prefab, instantiate, Vec3, CircleCollider2D, director, animation, Ball, GameController, Player, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Crosshair;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      CircleCollider2D = _cc.CircleCollider2D;
      director = _cc.director;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      Ball = _unresolved_2.Ball;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }, function (_unresolved_4) {
      Player = _unresolved_4.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7881jRrt9IX4EhqyTQboJ4", "Crosshair", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crosshair", Crosshair = (_dec = ccclass('Crosshair'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Animation
      }), _dec7 = property({
        type: animation.AnimationController
      }), _dec(_class = (_class2 = (_temp = class Crosshair extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ballPrefab", _descriptor, this);

          _initializerDefineProperty(this, "goal", _descriptor2, this);

          _initializerDefineProperty(this, "perfect", _descriptor3, this);

          _initializerDefineProperty(this, "player", _descriptor4, this);

          _initializerDefineProperty(this, "playerAnim", _descriptor5, this);

          _initializerDefineProperty(this, "controller", _descriptor6, this);

          _defineProperty(this, "newBall", void 0);
        }

        //spawn ball and store in a node
        start() {
          this.newBall = this.spawnNewBall();
        } //calculate to see if the ball is within the range of the crosshair


        CalculateDistance() {
          var distance = Math.sqrt((this.newBall.position.x - this.node.position.x) * (this.newBall.position.x - this.node.position.x) + (this.newBall.position.y - this.node.position.y) * (this.newBall.position.y - this.node.position.y)); //if ball is within radius - hit

          if (distance < this.node.getComponent(CircleCollider2D).radius) {
            //player jump
            if (this.newBall.position.y > 150) {
              this.player.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                error: Error()
              }), Player) : Player).Jump(this.newBall.position.y - this.player.position.y);
            } //play shoot anim


            this.playerAnim.play('kicking'); //ball is hit and add score

            this.newBall.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).ballHit();
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance.AddScore();

            if (distance < this.node.getComponent(CircleCollider2D).radius / 2) {
              //turn on goal art
              this.perfect.active = true;
              this.scheduleOnce(function () {
                this.perfect.active = false;
              }, 0.5);
            } //turn on goal art


            this.goal.active = true;
            this.scheduleOnce(function () {
              this.goal.active = false;
            }, 0.5);
          } //else, fall
          else {
              //fall anim and disable animation
              this.controller.setValue('fall', true);
              this.playerAnim.play('falling');
              this.playerAnim.pause(); //load play again scene

              this.scheduleOnce(function () {
                director.loadScene('over');
              }, 0.6);
            }
        } //update crosshair position based on ball


        update(deltaTime) {
          var crosshairPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          crosshairPos.y = this.newBall.position.y;
          this.node.position = crosshairPos;
        } //instantiate new ball at random position from 50 to 500 y axis


        spawnNewBall() {
          var newBall = instantiate(this.ballPrefab);
          newBall.parent = this.node.parent;
          newBall.position = new Vec3(600, Math.random() * 500 + 50, this.node.position.z);
          return newBall;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ballPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "perfect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playerAnim", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "controller", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Crosshair.js.map