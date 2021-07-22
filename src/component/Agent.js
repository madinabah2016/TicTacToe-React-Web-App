import Game from './Game';


class Agent{

    constructor(agent, opp){
        this.agent = agent;
        this.opp = opp;
    }

    initializeAgent(agent, opp){
        this.agent = agent;
        this.opp = opp;
    }

    bestMove(game){
        let array = [];
        this.minimax(game, true, array, this.agent, this.opp);
        return array[array.length-1];
    }
    
    minimax(game, p1, array, agent, opp){
        if(game.status == 2){
            if(game.getWinner() == agent+1){
                return 2;
            }
            else{
                return -2;
            }
        }
        else if(game.status == 1){
            return 1;
        }
        else{
            if(p1){
                let max = -100;
                let pos = -1;
                for(let i = 0; i < 9; i++){

                    let y = i%3;
                    let x = Math.floor(i/3);
                    if(game.array[x][y] == null){
                        var current_game = game.makeCopy();
                        current_game.update(i,agent);
                        let value = this.minimax(current_game, !p1, array, agent, opp); 
                        if(value > max){
                            max = value;
                            pos = i;
                            
                        }
                    }
                }
                array.push(pos);
                return max;

            }
            else{
                let min = 100;
                let pos = -1;
                for(let i = 0; i < 9; i++){

                    let y = i%3;
                    let x = Math.floor(i/3);
                    if(game.array[x][y] == null){
                        var current_game = game.makeCopy();
                        current_game.update(i,opp);
                        let value = this.minimax(current_game, !p1, array, agent, opp); 
                        if(value < min){
                            min = value;
                            pos=i;
                        }
                    }

                }
                array.push(pos);
                return min;

            }
        }

    }

} 

//console.log("No errors");
export default Agent;