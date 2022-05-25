System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Crosshair, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Touch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrosshair(extras) {
    _reporterNs.report("Crosshair", "./Crosshair", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Crosshair = _unresolved_2.Crosshair;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f6f0bQhvFHkbxvJsWKe8+T", "Touch", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Touch", Touch = (_dec = ccclass('Touch'), _dec2 = property({
        type: _crd && Crosshair === void 0 ? (_reportPossibleCrUseOfCrosshair({
          error: Error()
        }), Crosshair) : Crosshair
      }), _dec(_class = (_class2 = (_temp = class Touch extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "crossHair", _descriptor, this);
        }

        //when touch, play anim and calculate to see if the ball is within the range
        start() {
          this.node.on(Node.EventType.TOUCH_START, event => {
            this.crossHair.getComponent(_crd && Crosshair === void 0 ? (_reportPossibleCrUseOfCrosshair({
              error: Error()
            }), Crosshair) : Crosshair).CalculateDistance();
          }, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "crossHair", [_dec2], {
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
//# sourceMappingURL=Touch.js.map