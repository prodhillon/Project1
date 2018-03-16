
//Importing required files
import React from 'react'
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { render } from 'react-dom';
import Konva from 'konva';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import DisplayGame from './DisplayGame';

export default function breakoutgame_init(root, channel) {
  ReactDOM.render(<App/>, root);
}

class MyRect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bricks: [],
        ball: {x: 200 , y: 100, radius: 6},
        paddle: {w: 100 , h: 10, x: 80, y:90},
      };

      let brick_x=2,brick_w = 50,Width = 800, brick_y =10;
      for(var i=0;i<60;i++){
        let brick={id: i,x: brick_x,y: brick_y,w: brick_w,h: 10,color: 'green'}
        this.state.bricks.push(brick);
        brick_x+=brick_w+2;
        if(brick_x+brick_w+4>Width){
          brick_y+=12;
          brick_x=2;
        }
      }

    }
    render() {
        return (
          <div>
          <DisplayGame root={this} ball={this.state.ball} bricks={this.state.bricks} paddle={this.state.paddle} />
          </div>
        );
    }

}

function App() {
    return (
    <MyRect/>
    );
}
