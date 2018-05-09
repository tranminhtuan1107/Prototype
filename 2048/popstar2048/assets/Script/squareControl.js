// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    isJump: false,
    properties: {
        // main character's jump height
        jumpHeight: 0,
        // main character's jump duration
        jumpDuration: 0,
        // maximal movement speed
        maxMoveSpeed: 0,
        // acceleration
        accel: 0,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
           
           this.setJumpAction();
           
          }, this);
     },

     setJumpAction: function () {
         if(this.isJump == true)
         {
            cc.log("aaaaaa down");
              var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
              this.node.runAction(jumpDown);
              this.isJump = false;
         }
         else
         {
              // jump up
            var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
            this.node.runAction(jumpUp);
            cc.log("aaaaaa up");
            this.isJump = true;
         }
    },

    start () {

    },

    // update (dt) {},
});
