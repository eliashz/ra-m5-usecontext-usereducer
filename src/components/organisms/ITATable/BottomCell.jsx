import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { SelectGroup } from '../../molecules'
import { TableCell } from './styles'

const StyledIcon = styled(Icon)`
  color: ${colors.purple};
  font-size: 1.5em;
  cursor: pointer;
`

const StyledTableCell = styled(TableCell)`
  border-top: 0px;
`

function BottomCell() {
  return (
    <StyledTableCell>
      <FlexBox direction="row">
        <FlexBox direction="row" align="center">
          <StyledIcon icon="arrow_back_ios" wght="800" />
          <Text as="b" fontSize=".7em">
            Página 1 de 50
          </Text>
          <StyledIcon icon="arrow_forward_ios" wght="800" />
        </FlexBox>
        <FlexBox direction="row" align="center">
          <SelectGroup label="Mostrar"></SelectGroup>
        </FlexBox>
      </FlexBox>
    </StyledTableCell>
  )
}

export default BottomCell
