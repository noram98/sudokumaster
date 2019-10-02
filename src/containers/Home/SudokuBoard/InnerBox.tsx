import React, { ChangeEventHandler, memo, useContext } from 'react'
import { sudokuStore } from 'store'
import styled from 'styled'

interface IProps {
  row: number
  column: number
}
const Container = styled.div<IProps>``
const Input = styled.input<{ row: number; column: number; disabled?: boolean; focused?: boolean }>`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 25pt;
  font-weight: 600;
  color: ${({ disabled }) => (disabled ? '#000' : '#555')};
  border-top-width: ${({ row }) => ([1, 2, 4, 5, 7, 8].includes(row) ? '1px' : '0px')};
  border-right-width: ${({ column }) => ([2, 5, 8].includes(column) ? '0px' : '1px')};
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-color: #ccc;
  border: ${({ focused }) => (focused ? '3px solid rgba(70, 127, 207, 1)' : undefined)};
`

const InnerBox = memo<IProps>(p => {
  const { row, column } = p
  const sudokuState = useContext(sudokuStore)
  if (!sudokuState) {
    return null
  }
  const {
    currentFocusCoord,
    initialState,
    answerBoard,
    handleChangeAnswer,
    handleSetCurrentFocusCoord
  } = sudokuState
  const coordinate = `${row}${column}`
  const initialValue = initialState[coordinate]
  const currentVal = initialValue || answerBoard[coordinate]
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (!e.target.value) {
      return handleChangeAnswer(coordinate)
    }
    const answer = parseInt(e.target.value, 10)
    if (typeof answer === 'number' && answer > 0 && answer < 10) {
      return handleChangeAnswer(coordinate, answer)
    }
  }
  const handleFocus = () => handleSetCurrentFocusCoord(coordinate)
  return (
    <Container {...p}>
      <Input
        row={row}
        column={column}
        focused={currentFocusCoord === coordinate}
        onFocus={handleFocus}
        value={currentVal || ''}
        disabled={!!initialValue}
        onChange={handleChange}
        type="number"
        min={1}
        max={9}
      />
    </Container>
  )
})
export default InnerBox
