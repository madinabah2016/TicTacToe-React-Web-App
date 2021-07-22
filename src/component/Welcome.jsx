import React, { Component } from 'react';
import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from 'styled-components';


const Link = ({isActive, children, ...props}) => {
    return (
      <ReactRouterDomLink {...props}>
        {children}
      </ReactRouterDomLink>
    );
  }
  

  const StyledLink = styled(Link)`
  font-size: 30px;
  width:50%;
  margin-left: auto;
  margin-right: auto; 
  margin-top: 40px;
  padding-top:5px;
  border-radius: 20px;
  text-align: center;
  color: black;
  text-decoration: none;
  display: block;
  border-bottom: 10px solid #402A2C;
  :hover {
    cursor: pointer;
    background-color: #957186;
    color:white;
  }
`; 

const  headerStyle= {
  textAlign:"center",
  fontSize: "80px",
  fontFamily: "Monaco",
  
}


class Welcome extends React.Component {
    render() {
      return (
        <div>
            <h1 style={headerStyle}>
                TicTacToe Game
            </h1>
            <StyledLink to="/multi">
                <h3>Two Players</h3>
            </StyledLink>

            <StyledLink to="/single">
                <h3>Single Player</h3>
            </StyledLink>

        </div>
      );
    }
  }  

  export default Welcome;