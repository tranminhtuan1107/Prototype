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
        var Sprite1 = this.node.getChildByName("square1");
        var number = Sprite1.getChildByName("number");

        if (number) {
            var lb = number.getComponent(cc.Label);;
            lb.string  ="16";
            Sprite1.color =  cc.hexToColor('#C517C5');
        }
        else {
            cc.error("Something wrong??");
        }
        this.spawnNewSquare();
    },
    start () {

    },

    spawnNewSquare: function() {
        // generate a new node in the scene with a preset template
        var spawnNewSquare = cc.instantiate(this.squarePrefab);
        // put the newly added node under the Canvas node
        this.node.addChild(spawnNewSquare);
        // set up a random position for the star
        spawnNewSquare.setPosition(-130,270);
    },
    // update (dt) {},
  

    // update (dt) {},
});
