import styles from '../../styles/Home.module.css'
import {
  ChakraProvider,
  HStack,
  Input,
  InputGroup,
  VStack
} from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import { Component, React, useState, useEffect } from 'react';

export default function LightsOut(props){

  const [num,setNum] = useState(0)
  const [moves,setMoves] = useState(0)
  const [level,setLevel,getLevel] = useState(0)
  const [gameWon,setGameWon] = useState(0)
  const [color,setColor] = useState(0)
  const [board,setBoard] = useState([])
  const [customBoard,setCustomBoard] = useState('')
  const [reset,setReset] = useState(0)

  useEffect(() => {
    console.log('useEffect()')
    resetGame()
  }, [])

  const gameBoard = [
    [7,11,12,13,17],
    [5,10,11,15,13,14,9,19],
    [11,13],
  ]

  const resetGame = () => {
    console.log('resetGame')
    setCustomBoard('')
    console.log('level before setLevel: ' + level)
    level = 0
    setLevel(0)
    console.log('level after setLevel: ' + level)
    resetLevel()
  }

  const resetLevel = () => {
    console.log('resetLevel')
    const newBoard = Array(25).fill('gray')
    if ( customBoard != '')  {
      const board = customBoard.split(',')
      for (var n = 0; n < board.length; n++)
        newBoard[board[n]] = 'red'
    }
    else {
      for (var n = 0; n < gameBoard[level].length; n++) {
        newBoard[gameBoard[level][n]] = 'red'
      }
    }

    setBoard(newBoard)
    setGameWon(0)
    setMoves(0)
  }

  const wonGame = () => {
    console.log('wonGame')
    setGameWon(1)
    level = level + 1
    setLevel(level)
    console.log('next level: ' + level)
  }

  const enterCustomBoard = (event) => {
    setCustomBoard(event.target.value)
  }

  function next() {
    setNum((num+1)%3)
    console.log('next')
  }

  function previous() {
    if (num > 0)
	  setNum(num-1)
    else
	  setNum(2)
    console.log('previous')
  }

  const toggle = (num) => {
    if (num < 0)
	  return undefined
    if (board[num] == 'red')
	  return 'gray'
    else
	  return 'red'
  }

  const press = (num) => {
    if ( gameWon == 0 ) {
      setMoves(moves+1)
      board[num] = toggle(num)
      if (num > 0 && num != 5 && num != 10 && num != 15 && num != 20)
        board[num-1] = toggle(num-1)
      if (num < 24 && num != 19 && num != 14 && num != 9 && num != 4    )
        board[num+1] = toggle(num+1)
      if (num > 4)
        board[num-5] = toggle(num-5)
      if (num < 21)
        board[num+5] = toggle(num+5)

      setBoard(board)
      if (!board.includes('red'))
        wonGame()
    }
  }

  return ( 
      <HStack>
      <div className={styles.card}>
	  <VStack>
	    <HStack>
	      <Button bg={() => board[0]} onClick={() => press(0)} _hover=''></Button>
	      <Button bg={() => board[1]} onClick={() => press(1)} _hover=''></Button>
	      <Button bg={() => board[2]} onClick={() => press(2)} _hover=''></Button>
	      <Button bg={() => board[3]} onClick={() => press(3)} _hover=''></Button>
	      <Button bg={() => board[4]} onClick={() => press(4)} _hover=''></Button>
	    </HStack>
	    <HStack>
	      <Button bg={() => board[5]} onClick={() => press(5)} _hover=''></Button>
	      <Button bg={() => board[6]} onClick={() => press(6)} _hover=''></Button>
	      <Button bg={() => board[7]} onClick={() => press(7)} _hover=''></Button>
	      <Button bg={() => board[8]} onClick={() => press(8)} _hover=''></Button>
	      <Button bg={() => board[9]} onClick={() => press(9)} _hover=''></Button>
	    </HStack>
	    <HStack>
	      <Button bg={() => board[10]} onClick={() => press(10)} _hover=''></Button>
	      <Button bg={() => board[11]} onClick={() => press(11)} _hover=''></Button>
	      <Button bg={() => board[12]} onClick={() => press(12)} _hover=''></Button>
	      <Button bg={() => board[13]} onClick={() => press(13)} _hover=''></Button>
	      <Button bg={() => board[14]} onClick={() => press(14)} _hover=''></Button>
	    </HStack>
	    <HStack>
	      <Button bg={() => board[15]} onClick={() => press(15)} _hover=''></Button>
	      <Button bg={() => board[16]} onClick={() => press(16)} _hover=''></Button>
	      <Button bg={() => board[17]} onClick={() => press(17)} _hover=''></Button>
	      <Button bg={() => board[18]} onClick={() => press(18)} _hover=''></Button>
	      <Button bg={() => board[19]} onClick={() => press(19)} _hover=''></Button>
	    </HStack>
	    <HStack>
	      <Button bg={() => board[20]} onClick={() => press(20)} _hover=''></Button>
	      <Button bg={() => board[21]} onClick={() => press(21)} _hover=''></Button>
	      <Button bg={() => board[22]} onClick={() => press(22)} _hover=''></Button>
	      <Button bg={() => board[23]} onClick={() => press(23)} _hover=''></Button>
	      <Button bg={() => board[24]} onClick={() => press(24)} _hover=''></Button>
	    </HStack>
	  </VStack>
      </div>
	<VStack>
	<Text>{gameWon == 1 ?  "You won!" : "" }</Text>
	<Text>Moves: {moves}</Text>
        <Button bg='white' onClick={() => resetLevel()} _hover=''>{ gameWon == 1 ? "Next Level" : "Reset Level"}</Button>
        <Button bg='white' onClick={() => resetGame()} _hover=''>Reset Game</Button>
	<Input placeholder='Enter a custom board' value={customBoard} onChange={enterCustomBoard} size='sm' />
	</VStack>
      </HStack>
  )
}
