import React, { memo } from 'react'
import { generateBoard, getStore, ISudokuBoard, sudokuStore } from 'store'
import styled from 'styled'
import CompleteMessage from './CompleteMessage'
import Heading from './Heading'
import Sidebar from './Sidebar'
import SudokuBoard from './SudokuBoard'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

const Home = memo<{ board: ISudokuBoard; secretAnswers: ISudokuBoard }>(p => (
  <Wrapper>
    <sudokuStore.Provider value={getStore(p)}>
      <Sidebar />
      <Container>
        <Heading />
        <SudokuBoard />
        <CompleteMessage />
      </Container>
    </sudokuStore.Provider>
  </Wrapper>
))

Home.getInitialProps = () => {
  return generateBoard()
}
export default Home
