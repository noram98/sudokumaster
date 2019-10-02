import React, { memo } from 'react'
import styled from 'styled'
import OuterBox from './OuterBox'

const Container = styled.div`
  border: 1px solid #000;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`

const SudokuBoard = memo(() => {
  const renderOuterBox = (p: { row: number; column: number }) => (
    <OuterBox key={`outerRow${p.row}outerCol${p.column}`} {...p} />
  )

  const rows = Array(3).fill(undefined)
  const cols = Array(3).fill(undefined)
  const boxes = cols.reduce((result, _r, row) => {
    const thisRow = rows.map((_c, column) => renderOuterBox({ row, column }))
    return [...result, ...thisRow]
  }, [])

  return <Container>{boxes}</Container>
})
export default SudokuBoard
