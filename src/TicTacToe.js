import React, {useState} from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(new Array(9).fill(''));
    const [someoneWon, setSomeoneWon] = useState(false);

    const checkWinner = (num) => {
        let winningPatterns = [
            [
                [0, 4, 8],
                [2, 4, 6]
            ],

            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],

            [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ]
        ]

        if(num % 2 == 0){
            for(let i = 0; i < winningPatterns.length; i++){
                for(let j = 0; j < winningPatterns[i].length; j++){
                    if(cells[winningPatterns[i][j][0]] !== ''){
                        if(cells[winningPatterns[i][j][0]] === cells[winningPatterns[i][j][1]] && cells[winningPatterns[i][j][1]] === cells[winningPatterns[i][j][2]]){
                            setSomeoneWon(true);
                            alert(cells[num] + ' won!');
                        }
                    }
                }
            }
        }else{
            for(let i = 1; i < winningPatterns.length; i++){
                for(let j = 0; j < winningPatterns[i].length; j++){
                    if(cells[winningPatterns[i][j][0]] !== ''){
                        if(cells[winningPatterns[i][j][0]] === cells[winningPatterns[i][j][1]] && cells[winningPatterns[i][j][1]] === cells[winningPatterns[i][j][2]]){
                            setSomeoneWon(true);
                            alert(cells[num] + ' won!');
                        }
                    }
                }
            }
        }
    }

    const handleClick = (num) => {
        let squares = cells;
        if(someoneWon === false && squares[num] !== 'X' && squares[num] !== 'O'){
            if(turn === 'X'){
                squares[num] = 'X'
                setTurn('O');
            }else{
                squares[num] = 'O'
                setTurn('X');
            }
            
            if(num % 2 == 0){
                for(let i = 0; i < 9; i+=4){

                }
            }
        
        
        setCells(squares);
        checkWinner(num);
        }
    }

    const Cell = ({num}) => {
        return <td onClick = {() => {handleClick(num)}}>{cells[num]}</td>
    }

  return (
    <div className = 'container'>
        <div>
            <h1>Tic Tac Toe</h1>
        <table>
            <tbody>
                <tr>
                    <Cell num = {0}/>
                    <Cell num = {1}/>
                    <Cell num = {2}/>
                </tr>
                <tr>
                    <Cell num = {3}/>
                    <Cell num = {4}/>
                    <Cell num = {5}/>
                </tr>
                <tr>
                    <Cell num = {6}/>
                    <Cell num = {7}/>
                    <Cell num = {8}/>
                </tr>
            </tbody>
        </table>
        <h1>Turn: {turn}</h1>
        <button onClick={() => {setCells(new Array(9).fill('')); setSomeoneWon(false)}}>Restart</button>
        </div>
    </div>
  )
}

export default TicTacToe