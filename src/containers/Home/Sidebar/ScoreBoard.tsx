import React, { memo, useContext } from 'react'
import { sudokuStore } from 'store'
import styled from 'styled'

const H1 = styled.h1`
  text-align: center;
  color: rgba(205, 32, 31, 1);
`
const H3 = styled.h4`
  text-align: center;
  color: rgba(205, 32, 31, 1);
`
const Container = styled.div`
  border: 3px solid rgba(205, 32, 31, 1);
  width: 50%;
  margin: 18px 0 9px 0;
`

const ScoreBoard = memo(() => {
  const sudokuState = useContext(sudokuStore)
  if (!sudokuState) {
    return null
  }
  const { fails } = sudokuState
  if (!fails) {
    return null
  }

  return (
    <>
      <Container>
        <H1>{fails}</H1>
      </Container>
      <H3>次笨蛋</H3>
    </>
  )
})
export default ScoreBoard
