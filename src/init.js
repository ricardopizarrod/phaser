const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
 var gamr = new Phaser.Game(config);
function preload(){
    console.log("Soy preload")
}
function create(){
    console.log("Soy create")
}
function update(time, delta){
    console.log(delta)
}