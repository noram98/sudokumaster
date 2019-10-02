import React, { memo, useContext, useState } from 'react'
import { sudokuStore } from 'store'
import styled from 'styled'

const Span = styled.span`
  text-align: center;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`
const Button = styled.button`
  padding: 8px;
  background-color: rgba(70, 127, 207, 1);
  color: #fff;
  font-weight: 600;
  margin: 18px 0 8px 0;
  border-radius: 4px;
`
const Error = styled.span`
  text-align: center;
  color: rgba(205, 32, 31, 1);
  font-size: 16px;
  font-weight: 600;
`

const Hints = memo(() => {
  const [error, handleSetError] = useState<string | undefined>()
  const [showHints, handleSetShowHints] = useState<boolean>(false)
  const sudokuState = useContext(sudokuStore)
  if (!sudokuState) {
    return null
  }
  const { hints, handleGiveHint } = sudokuState

  const handleClick = () => {
    try {
      handleGiveHint()
      handleSetShowHints(true)
      setTimeout(() => handleSetShowHints(false), 5000)
    } catch (error) {
      handleSetError(error.message)
      setTimeout(() => handleSetError(undefined), 5000)
    }
  }

  return (
    <>
      <Button onClick={handleClick}>给 Hint</Button>
      {showHints ? <Span>还有 {hints} 个 hints</Span> : null}
      {error ? <Error>{error}</Error> : null}
    </>
  )
})
export default Hints
