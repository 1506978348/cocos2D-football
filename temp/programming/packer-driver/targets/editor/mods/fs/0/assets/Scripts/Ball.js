System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, director, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Ball;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ef61KhWmRMA404q83qK8ZY", "Ball", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec(_class = (_class2 = (_temp = class Ball extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "moveDown", void 0);

          _defineProperty(this, "isHit", void 0);

          _initializerDefineProperty(this, "horizontalSpeed", _descriptor, this);

          _initializerDefineProperty(this, "verticalSpeed", _descriptor2, this);

          _defineProperty(this, "_hitSpeedX", 800);

          _defineProperty(this, "_hitSpeedY", 200);

          _defineProperty(this, "width", 600);

          _defineProperty(this, "playerX", -400);

          _defineProperty(this, "max", void 0);

          _defineProperty(this, "ballPos", void 0);
        }

        start() {
          this.moveDown = true;
          this.isHit = false;
          this.ballPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          this.max = this.ballPos.y;
        } //when ball hit the crosshair


        ballHit() {
          this.isHit = true;
        }

        update(deltaTime) {
          //if ball is not hit
          if (this.isHit == false) {
            //if ball falls down
            if (this.moveDown == true) {
              //set speed for ball to fall down
              this.ballPos.x -= this.horizontalSpeed * deltaTime;
              this.ballPos.y -= this.verticalSpeed * deltaTime; //if ball hits ground - bounce up

              if (this.ballPos.y < 0) {
                this.moveDown = false;
              }

              if (this.ballPos.x < this.playerX) {
                director.loadScene("over");
              }

              this.node.position = this.ballPos;
            } //if ball bounces up
            else {
                this.ballPos.x -= this.horizontalSpeed * deltaTime;
                this.ballPos.y += this.verticalSpeed * deltaTime; //ball moves down again when hit max value

                if (this.ballPos.y > this.max) {
                  this.moveDown = true;
                }

                if (this.ballPos.x < this.playerX) {
                  director.loadScene("over");
                }

                this.node.position = this.ballPos;
              }
          } //if ball is hit


          if (this.isHit == true) {
            this.ballPos.x += this._hitSpeedX * deltaTime;
            this.ballPos.y += this._hitSpeedY * deltaTime;

            if (this.ballPos.x > this.width) {
              this.isHit = false;
              this.ballPos.y = Math.random() * 500 + 50;
            }

            this.node.position = this.ballPos;
            this.max = this.ballPos.y;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "horizontalSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 700;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "verticalSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 400;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Ball.js.map