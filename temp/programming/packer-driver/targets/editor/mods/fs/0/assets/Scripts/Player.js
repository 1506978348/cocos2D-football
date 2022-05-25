System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, Player;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38b33u5NIxBEpmm+OIrYO8S", "Player", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = (_temp = class Player extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isJumping", void 0);

          _defineProperty(this, "startToJump", void 0);

          _defineProperty(this, "currentPos", void 0);

          _defineProperty(this, "step", 100);

          _defineProperty(this, "targetPos", new Vec3());

          _defineProperty(this, "curJumpTime", 0);

          _defineProperty(this, "jumpTime", 0.2);

          _defineProperty(this, "jumpSpeed", 1000);

          _defineProperty(this, "originalPos", void 0);

          _defineProperty(this, "isLanding", void 0);

          _defineProperty(this, "landTime", 0.2);

          _defineProperty(this, "curLandTime", 0);
        }

        //private curLandPos: Vec3;
        start() {
          this.originalPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        }

        update(deltaTime) {
          //jumping
          if (this.startToJump) {
            this.curJumpTime += deltaTime;

            if (this.curJumpTime > this.jumpTime) {
              //end
              this.node.position = this.targetPos;
              this.startToJump = false;
              this.JumpEnd();
            } else {
              //tween
              this.currentPos.y += this.jumpSpeed * deltaTime;
              this.node.position = this.currentPos;
            }
          } //landing


          if (this.isLanding) {
            this.curLandTime += deltaTime;

            if (this.curLandTime > this.landTime) {
              this.node.position = this.originalPos;
              this.curLandTime = 0;
            }
          }
        }

        JumpEnd() {
          this.isJumping = false;
          this.scheduleOnce(function () {
            this.isLanding = true;
          }, 0.15);
        }

        Jump(height) {
          if (this.isJumping) {
            return;
          } //set current move time


          this.curJumpTime = 0; //set target position

          this.currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          Vec3.add(this.targetPos, this.currentPos, new Vec3(0, height, 0));
          this.startToJump = true;
          this.isJumping = true;
          this.isLanding = false;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Player.js.map