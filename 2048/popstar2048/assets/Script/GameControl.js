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

    properties: {
        squarePrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       /* var Sprite1 = this.node.getChildByName("square1");
        var number = Sprite1.getChildByName("number");

        if (number) {
            var lb = number.getComponent(cc.Label);;
            lb.string  ="16";
            Sprite1.color =  cc.hexToColor('#C517C5');
        }
        else {
            cc.error("Something wrong??");
        }*/
        this.spawnNewSquare();
    },
    //start () {

    //},

    spawnNewSquare: function() {
        // generate a new node in the scene with a preset template
        let pos_x = -130;
        let pos_y = 270;
       for (let indexX = 0; indexX <= 3; indexX++) {
            for (let indexY = 0; indexY < 7; indexY++) {
                var NewSquare = cc.instantiate(this.squarePrefab);
                this.node.addChild(NewSquare);
                NewSquare.setPosition(pos_x + 86*indexX, pos_y - 86 * indexY);
            }
       }
      
    },
    // update (dt) {},
  

    // update (dt) {},
});
