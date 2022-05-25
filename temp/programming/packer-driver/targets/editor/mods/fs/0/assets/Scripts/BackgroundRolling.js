System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BackgroundRolling;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcf78RMUjlIV4hnX5EjKC3Z", "BackgroundRolling", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackgroundRolling", BackgroundRolling = (_dec = ccclass('BackgroundRolling'), _dec(_class = (_class2 = (_temp = class BackgroundRolling extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "speed", 250);

          _defineProperty(this, "leftScreen", -1070);

          _initializerDefineProperty(this, "rightScreen", _descriptor, this);

          _defineProperty(this, "curPosition", void 0);

          _defineProperty(this, "isRunning", true);
        }

        start() {
          this.curPosition = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        }

        update(deltaTime) {
          if (this.isRunning) {
            this.curPosition.x -= this.speed * deltaTime;

            if (this.curPosition.x < this.leftScreen) {
              this.curPosition.x = this.rightScreen;
            }

            this.node.position = this.curPosition;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rightScreen", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1070;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BackgroundRolling.js.map