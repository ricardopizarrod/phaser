const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics:{
        default: "arcade",
        arcade: {
            gravity: {
                //y: 500
            }
        }

    }
}
 var gamr = new Phaser.Game(config);
function preload(){
    this.load.image("pajaro", "./assets/bird.png");
}
function create(){
    this.pajaro= this.physics.add.image(80, 100, "pajaro");
/*     this.pajaro.setScale(2);
    this.pajaro.flipX = true;
    this.pajaro.setOrigin(0.5);
    //Propiedades Fisicas
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.3);
    this.pajaro.setVelocity(50,0); */

    this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor);
/* 
   this.right = this.input.keyboard.addKey(Phaser.Input.keyboard.KeyCodes.D);
   this.left = this.input.keyboard.addKey(Phaser.Input.keyboard.KeyCodes.A); */

}
//Move el pajaro de izquierda a derecha
function update(time, delta){
    if(this.cursor.right.isDown) {
        this.pajaro.x++
    } else if (this.cursor.left.isDown) {
        this.pajaro.x--;
    }
 
}