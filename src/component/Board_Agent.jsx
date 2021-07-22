import React, { Component } from 'react';
import Square from './Square' 
import styled from 'styled-components';
import Game from './Game';
import Agent from './Agent';


const tableStyle = {
    marginLeft: "auto",
    marginRight: "auto"

}

const newGameBtn = {
  marginLeft:"auto",
  marginRight:"auto",
  backgroundColor:"#402A2C", 
  color:"white",
  padding:"8px",
  width:"150px",
  height:"70px",
  fontSize: "25px",
  borderWidth:"0px",
  display:"block"
}

const buttonStyle = {
  color: "black",
  padding: "10px",
  fontFamily: "Arial",
  fontSize: "100px",
  width: "150px",
  height:"150px",
  backgroundColor: "#957186",
  color: "white", 
  borderWidth:"0px"
  
};


const buttonStyleStrike = {
  color: "black",
  padding: "10px",
  fontFamily: "Arial",
  fontSize: "100px",
  width: "150px",
  height:"150px",
  backgroundColor: "#703D57",
  color: "white", 
  borderWidth:"0px"
};


const h1Style = {
    textAlign: "center"
}

class Board_Agent extends React.Component { 
    
  constructor(props) {
    super(props);
    
    
    this.state = {
      p1:0,
      p2:1,
      player1: true,
      status: 0,
      array: [null, null, null, null, null, null, null, null, null],
      styleArray: Array(9).fill(buttonStyle),
      game : new Game(1,2), 
      agent: new Agent(1, 0),
    };

    var rand = Math.floor(Math.random() * 2);
    if(rand == 1){
      this.state.game.p1_turn = false;
      this.agent_turn();
    }
    
  } 

  handleClick(i){

    if((this.state.array[i]==null) && (this.state.status==0)){

      this.state.array[i] = 'O';

      let result = this.state.game.update(i,this.state.p1);
      this.setState({status: result});
      this.setState({player1: !this.state.player1});  

      if(result == 0){
        this.agent_turn();
      }
      
   }
  } 
  
  agent_turn(){
    var current_game = this.state.game.makeCopy();
    let move = this.state.agent.bestMove(current_game);

    this.state.array[move] = 'X';

    console.log("Move: "+move);
    let result = this.state.game.update(move,this.state.p2);
    this.setState({status: result});
    this.setState({player1: !this.state.player1}); 
  }

  wait(ms){
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
  }

  newGame(){
    this.setState({status:0, player1:true, array: Array(9).fill(null), styleArray: Array(9).fill(buttonStyle)});
    this.state.game.initializeGame(); 
    
  }
  
  render() { 

    console.log(this.state.player1);

    let turn = <h2 style={h1Style} >Player 1 vs Agent</h2>;

    const game_status = this.state.status;
    let text = <h2></h2>; 
    if(game_status == 2){
      if(this.state.game.getWinner() == (this.state.p1+1) ){
        text = <h2 style={h1Style}>Player 1 is the winner</h2>;
      }
      else{
        text = <h2 style={h1Style}>Game Agent is the winner</h2>;
      }
      for(let b = 0; b < 3; b++){
        this.state.styleArray[this.state.game.strikeArray[b]] = buttonStyleStrike;
      }

      
    }
    else if(game_status == 1){
      text = <h2 style={h1Style}>No Winner</h2>;
    }

    let button = <></>
    if(game_status == 1 || game_status == 2){
      
      button = <button style={newGameBtn} onClick = {()=>this.newGame()}> New Game </button>
    }

    return (
      <div>
        <h1 style={h1Style}>TicTacToe</h1> 
        {turn}
        <table style={tableStyle}>
            <tr>
                <td><Square style={this.state.styleArray[0]} value={this.state.array[0]} click={() => this.handleClick(0)}></Square></td>
                <td><Square style={this.state.styleArray[1]} value={this.state.array[1]} click={() => this.handleClick(1)}></Square></td>
                <td><Square style={this.state.styleArray[2]} value={this.state.array[2]} click={() => this.handleClick(2)}></Square></td>
            </tr>
            <tr>
                <td><Square style={this.state.styleArray[3]} value={this.state.array[3]} click={()=> this.handleClick(3)}></Square> </td>
                <td><Square style={this.state.styleArray[4]} value={this.state.array[4]} click={()=> this.handleClick(4)}></Square></td>
                <td><Square style={this.state.styleArray[5]} value={this.state.array[5]} click={()=> this.handleClick(5)}></Square></td>
            </tr>
            <tr>
                <td><Square style={this.state.styleArray[6]} value={this.state.array[6]} click={()=>this.handleClick(6)}></Square> </td>
                <td><Square style={this.state.styleArray[7]} value={this.state.array[7]} click={()=>this.handleClick(7)}></Square></td>
                <td><Square style={this.state.styleArray[8]} value={this.state.array[8]} click={()=>this.handleClick(8)}></Square></td>
            </tr>
        </table>
        {text} 
        {button}
      </div>
    );
  }
}  

export default Board_Agent;