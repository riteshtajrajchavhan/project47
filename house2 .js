class House2{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(housesImg);
        this.body.scale=2.0;
    }
    display(){
        if(gamestate===end){
            this.body.destroy();
        }
    
        if(gamestate==="instrution1"){
            this.body.visible = false;
        }
        
        if(gamestate===instrution2){
            this.body.visible = false;
        }
    
        if(gamestate===instrution3){
            this.body.visible = false;
        }
        
        if(gamestate===level1){
            this.body.visible = true;
        }
    
        if(gamestate===level2){
            this.body.visible = true;
        }
    
        if(gamestate===level3){
            this.body.visible = true;
        }

        if(gamestate === youwin){
            this.body.destroy();
         }

        player.collide(this.body);
        car.collide(this.body);
    }
}