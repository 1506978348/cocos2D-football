System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, animation, _dec, _class, _crd, ccclass, property, AnimationGraphComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      animation = _cc.animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0833f7QgRHtYyKMJcaVMkC", "AnimationGraphComponent", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = AnimationGraphComponent
       * DateTime = Fri Mar 18 2022 11:54:50 GMT+0700 (Indochina Time)
       * Author = lamngo_
       * FileBasename = AnimationGraphComponent.ts
       * FileBasenameNoExtension = AnimationGraphComponent
       * URL = db://assets/Anim/AnimationGraphComponent.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("AnimationGraphComponent", AnimationGraphComponent = (_dec = ccclass("AnimationGraphComponent"), _dec(_class = class AnimationGraphComponent extends animation.StateMachineComponent {// /**
        //  * Called when a motion state right after it entered.
        //  * @param controller The animation controller it within.
        //  * @param motionStateStatus The status of the motion.
        //  */
        // public onMotionStateEnter (controller: animation.AnimationController, motionStateStatus: Readonly<animation.MotionStateStatus>): void {
        //     // Can be overrode
        // }
        // /**
        //  * Called when a motion state is going to be exited.
        //  * @param controller The animation controller it within.
        //  * @param motionStateStatus The status of the motion.
        //  */
        // public onMotionStateExit (controller: animation.AnimationController, motionStateStatus: Readonly<animation.MotionStateStatus>): void {
        //     // Can be overrode
        // }
        // /**
        //  * Called when a motion state updated except for the first and last frame.
        //  * @param controller The animation controller it within.
        //  * @param motionStateStatus The status of the motion.
        //  */
        // public onMotionStateUpdate (controller: animation.AnimationController, motionStateStatus: Readonly<animation.MotionStateStatus>): void {
        //     // Can be overrode
        // }
        // /**
        //  * Called when a state machine right after it entered.
        //  * @param controller The animation controller it within.
        //  */
        // public onStateMachineEnter (controller: animation.AnimationController) {
        //     // Can be overrode
        // }
        // /**
        //  * Called when a state machine right after it entered.
        //  * @param controller The animation controller it within.
        //  */
        // public onStateMachineExit (controller: animation.AnimationController) {
        //     // Can be overrode
        // }
      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AnimationGraphComponent.js.map