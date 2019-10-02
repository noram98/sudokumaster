import React, { memo } from 'react'
import styled from 'styled'
import Hints from './Hints'
import ScoreBoard from './ScoreBoard'

const Container = styled.div`
  border-right: 1px solid #ddd;
  min-width: 200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Sidebar = memo(() => (
  <Container>
    <ScoreBoard />
    <Hints />
  </Container>
))

export default Sidebar
