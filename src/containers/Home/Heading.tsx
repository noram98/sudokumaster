import React, { memo } from 'react'
import styled from 'styled'

const H1 = styled.h1`
  margin: 18px 0;
`

const Heading = memo(() => <H1>加油</H1>)
export default Heading
