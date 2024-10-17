import React, { useState } from 'react'
export default function Square(props) {
  return (
    <>
    {props.condition?<div className="square" onClick={props.onSquareClick}>{props.value}</div>:<div className="square" >{props.value}</div>}
    </>   
  )
}
