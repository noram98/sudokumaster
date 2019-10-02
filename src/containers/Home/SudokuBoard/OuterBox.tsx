import React, { memo } from 'react'
import styled from 'styled'
import InnerBox from './InnerBox'

const Container = styled.div`
  border: 1px solid #000;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`

interface IProps {
  row: number
  column: number
}

const OuterBox = memo<IProps>(({ row: outerRow, column: outerCol }) => {
  const renderInnerBox = (p: { row: number; column: number }) => (
    <InnerBox key={`row${p.row}col${p.column}`} {...p} />
  )

  const rows = Array(3).fill(undefined)
  const cols = Array(3).fill(undefined)
  const boxes = cols.reduce((result, _r, row) => {
    const thisRow = rows.map((_c, column) =>
      renderInnerBox({ row: row + outerRow * 3, column: column + outerCol * 3 })
    )
    return [...result, ...thisRow]
  }, [])

  return <Container>{boxes}</Container>
})
export default OuterBox
