class Game {

    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
        this.array = [[null, null, null], [null, null, null], [null, null, null]];
        this.count = 0;
        this.p1_turn = true; 
        this.status = 0;
        this.strikeArray = [];
    }

    makeCopy(){
        var new_game = new Game(this.p1, this.p2);
        new_game.array = [[null, null, null], [null, null, null], [null, null, null]];
        for(let x = 0; x<3; x++){
            for(let y = 0; y < 3; y++){
                new_game.array[x][y] = this.array[x][y];
            }
        }
        
        new_game.p1_turn = this.p1_turn;
        new_game.status = this.status;
        return new_game;
    }

    getWinner(){
        if(this.status == 2){
            if(this.p1_turn){
                return 1;
            }
            else{
                return 2;
            }
        }
        return -1;
    }

    initializeGame(){
        this.array = [[null, null, null], [null, null, null], [null, null, null]];
        this.count = 0;
        this.p1_turn = true;
        this.status = 0;
    } 

    update(pos, value){
        let y = pos%3;
        let x = Math.floor(pos/3);
        this.array[x][y] = value;
        this.count = this.count+1;
        

        //Check P1 or P2 won 
        if(this.isStrike(x,y,value)){
            this.status = 2;
            return 2; 
           
        }
        //Check tie
        if(this.isTie()){
            this.status = 1;
            return 1;
        }
        this.p1_turn = !this.p1_turn; 
        
        //Continue Game

        return 0;

    }
    
    isTie(){
        for(let x = 0; x < 3; x++){
            for(let y = 0; y < 3; y++){
                if(this.array[x][y] == null){
                    return false;
                }
            }
        }
        return true;
    }

    isStrike(x, y, value){

        let num = 0;
        this.strikeArray = [];
        for(let a = 0; a < 3; a++){
            if(this.array[a][y] == value){
                num++; 
                this.strikeArray.push((3*a)+y);
            }
        }
        if(num == 3){
            //console.log("vertical");
            return true;
        }

        num = 0; 
        this.strikeArray=[];
        for(let z = 0; z < 3; z++){
            if(this.array[x][z] == value){
                num++;
                this.strikeArray.push((3*x)+z);
            }
        }
        if(num == 3){
            //console.log("horizontal");
            return true;
        }

        num = 0;       
        this.strikeArray = []; 
        for(let w = 0; w < 3; w++){
            if(this.array[w][w] == value){
                num++;
                this.strikeArray.push((3*w)+w);
            }
        }
        if(num == 3){
            //console.log("Diagonal 1");
            return true;
        }
    
        num=0;
        this.strikeArray = [];
        for(let s = 0; s < 3; s++){
            if(this.array[s][2-s] == value){
                num++;
                this.strikeArray.push((3*s)+(2-s));
            }
        }
        if(num == 3){
            //console.log("Diagonal 2");
            return true;
        }
        
        return false;
    }

}


export default Game;