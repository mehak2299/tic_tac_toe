import React, { useEffect, useState } from 'react'
import Square from './Square'
import '../App.css';
export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null))
  const [symbol, setSymbol] = useState(true)
  const [player, setPlayer] = useState('X')
  const [restrictUser, setRestrictUser] = useState(Array(9).fill(true))
  const handleClick = (index) => {
    const copySquare = [...square];
    copySquare[index] = symbol ? 'X' : '0'
    setSquare(copySquare)
    setSymbol(!symbol)
    const copyRestrict = [...restrictUser]
    copyRestrict[index] = !restrictUser
    setRestrictUser(copyRestrict)

  }
  const checkWinner = () => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of winnerArray) {
      const [a, b, c] = i;
      console.log(a, b, c)
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];

      }
    }
    return false;
  }
  const checker = item => item.every(v => v === false);
  const isWinner = checkWinner()
  const ischecker = checker(restrictUser)
  useEffect(() => {
    const playerValue = symbol ? 'X' : '0'
    setPlayer(playerValue)
  }, [symbol])
  return (
    <div className='container'>
      {isWinner ? 
      <h1>Winner is {isWinner} </h1> : 
      ischecker ? 
      <h1>NO Winner</h1> : <>
        <h1>Player {player}</h1>
        <div className='board_row'>
          <Square value={square[0]} onSquareClick={() => handleClick(0)} condition={restrictUser[0]} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} condition={restrictUser[1]} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} condition={restrictUser[2]} />

        </div>
        <div className='board_row'>
          <Square value={square[3]} onSquareClick={() => handleClick(3)} condition={restrictUser[3]} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} condition={restrictUser[4]} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} condition={restrictUser[5]} />

        </div>
        <div className='board_row'>
          <Square value={square[6]} onSquareClick={() => handleClick(6)} condition={restrictUser[6]} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} condition={restrictUser[7]} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} condition={restrictUser[8]} />

        </div>
      </>} 
     




    </div>
  )
}
