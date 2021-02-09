class Road{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(roadImg1);
        this.body.scale=2.0;
    }
    display(){
        if(gamestate===end){
            this.body.destroy();
        }

        if(gamestate==="instrution1"){
            this.body.visible = false;
        }
        
        if(gamestate===level1){
            this.body.visible = true;
        }

        if(gamestate===instrution2){
            this.body.visible = false;
        }
        
        if(gamestate===level2){
            this.body.visible = true;
        }

        if(gamestate===instrution3){
            this.body.visible = false;
        }

        if(gamestate===level3){
            this.body.visible = true;
        }

        if(gamestate === youwin){
            this.body.destroy();
         }

    }
}