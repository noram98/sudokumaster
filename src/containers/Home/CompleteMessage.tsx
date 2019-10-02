import React, { memo, useContext } from 'react'
import { sudokuStore } from 'store'
import styled from 'styled'

const H1 = styled.h1<{ correct: boolean }>`
  margin: 18px 0;
  color: ${({ correct }) => (correct ? 'rgba(18,182,116,1)' : 'rgba(205,32,31,1)')};
`

const CompleteMessage = memo(() => {
  const sudokuState = useContext(sudokuStore)
  if (!sudokuState) {
    return null
  }
  const { complete, valid, answerBoard } = sudokuState
  if (Object.values(answerBoard).filter(v => !!v).length === 0) {
    return null
  }

  return (
    <H1 correct={valid}>
      {valid ? (complete ? 'CORRECT!! 恭喜宝贝' : '可能OK。。继续吧！') : '不对！笨蛋！'}
    </H1>
  )
})
export default CompleteMessage
