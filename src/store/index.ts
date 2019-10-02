import { createContext, useState } from 'react'

// Coordinate : number
// row + col
// [0   0]

const DIFFICULTY = 50
const HINTS = 10

export interface ISudokuBoard {
  [coordinate: string]: number | undefined
}

export interface ISudokuState {
  initialState: ISudokuBoard
  answerBoard: ISudokuBoard
  complete: boolean
  fails: number
  valid: boolean
  hints: number
  currentFocusCoord?: string
  handleChangeAnswer: (coordinate: string, answer?: number) => void
  handleSetCurrentFocusCoord: (coordinate?: string) => void
  handleGiveHint: () => void
}

export const isValid = (state: ISudokuBoard) => {
  const rowNums: { [row: number]: number[] } = {}
  const colNums: { [col: number]: number[] } = {}
  const boxNums: { [box: number]: number[] } = {}
  const keys = Object.keys(state)
  for (const coordinate of keys) {
    const splitKey = coordinate.split('')
    const value = state[coordinate]
    const row = parseInt(splitKey[0], 10)
    const col = parseInt(splitKey[1], 10)
    const colBox = Math.floor(col > 0 ? col / 3 : 0) + 1
    const rowBox = Math.floor(row > 0 ? row / 3 : 0) * 3
    const box = rowBox + colBox
    if (!rowNums[row]) {
      rowNums[row] = []
    }
    if (!colNums[col]) {
      colNums[col] = []
    }
    if (!boxNums[box]) {
      boxNums[box] = []
    }
    if (!value) {
      continue
    }
    if (
      boxNums[box].includes(value) ||
      rowNums[row].includes(value) ||
      colNums[col].includes(value)
    ) {
      return false
    }
    boxNums[box].push(value)
    rowNums[row].push(value)
    colNums[col].push(value)
  }
  return true
}

const generateAState = () => {
  const state: ISudokuBoard = {}

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const coordinate = `${row}${col}`
      const testedNums: number[] = []
      while (testedNums.length < 8) {
        const testNum = Math.floor(Math.random() * 9) + 1
        if (testedNums.includes(testNum)) {
          continue
        }
        if (isValid({ ...state, [coordinate]: testNum })) {
          state[coordinate] = testNum
          break
        }
        testedNums.push(testNum)
        if (testedNums.length === 8) {
          return undefined
        }
      }
    }
  }

  return state
}

export const generateBoard = () => {
  while (true) {
    const board = generateAState()
    const secretAnswers: ISudokuBoard = {}
    if (board) {
      for (let index = 0; index < DIFFICULTY; index++) {
        while (true) {
          const row = Math.floor(Math.random() * 9)
          const col = Math.floor(Math.random() * 9)
          const coordinate = `${row}${col}`
          if (!!board[coordinate]) {
            secretAnswers[coordinate] = board[coordinate]
            board[coordinate] = undefined
            break
          }
        }
      }
      return { board, secretAnswers }
    }
  }
}

export const getStore = (p: { board: ISudokuBoard; secretAnswers: ISudokuBoard }): ISudokuState => {
  const [answerBoard, handleSetAnswerBoard] = useState<ISudokuBoard>({})
  const [fails, handleSetFails] = useState<number>(0)
  const [valid, handleSetValid] = useState<boolean>(true)
  const [hints, handleSetHints] = useState<number>(HINTS)
  const [currentFocusCoord, handleSetCurrentFocusCoord] = useState<string | undefined>()
  const handleChangeAnswer = (coordinate: string, answer?: number) => {
    const newBoard = { ...answerBoard, [coordinate]: answer }
    const newValid = isValid({ ...p.board, ...newBoard })
    if (!newValid) {
      handleSetFails(fails + 1)
    }
    handleSetValid(newValid)
    handleSetAnswerBoard(newBoard)
  }
  const handleGiveHint = () => {
    if (!hints) {
      throw { message: 'NO MORE HINTS!' }
    }
    if (!currentFocusCoord) {
      throw { message: 'Click on a box first for a hint!' }
    }
    if (valid && !!answerBoard[currentFocusCoord]) {
      throw { message: 'Pick a different box!' }
    }
    handleChangeAnswer(currentFocusCoord, p.secretAnswers[currentFocusCoord])
    handleSetHints(hints - 1)
    handleSetCurrentFocusCoord(undefined)
  }
  const complete =
    Object.keys(p.board).length + Object.values(answerBoard).filter(v => !!v).length === 81
  return {
    currentFocusCoord,
    handleSetCurrentFocusCoord,
    handleGiveHint,
    hints,
    valid,
    fails,
    handleChangeAnswer,
    initialState: p.board,
    answerBoard,
    complete
  }
}

export const sudokuStore = createContext<ISudokuState | undefined>(undefined)
