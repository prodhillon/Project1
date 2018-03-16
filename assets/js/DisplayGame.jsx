
import React from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';

export default function DisplayGame(props) {

  let rects = props.bricks.map((rr) => {
    return <Rect key={"r"+rr.id} x={rr.x} y={rr.y} width={rr.w} height={rr.h} fill= 'green' />
  });



  return (
    <Stage width={800} height={600}>
      <Layer>
        { rects }
        <Circle x={props.ball.x} y={props.ball.y} radius={props.ball.radius} fill='red' />
        <Rect  x={props.paddle.x} y={props.paddle.y} width={props.paddle.w} height={props.paddle.h} fill= 'black' />
      </Layer>
    </Stage>
  );
}
