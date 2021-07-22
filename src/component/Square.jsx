import React, { Component } from 'react';
import styled from 'styled-components';


const buttonStyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "50px",
    width: "150px",
    height:"150px",
    backgroundColor: "#957186",
    color: "white", 
    borderWidth:"0px"
    
};



class Square extends React.Component { 

    render() {

      return (
        <button style={this.props.style} onClick={this.props.click}>
          {this.props.value}
        </button>
      );
    }
  }  

  export default Square;