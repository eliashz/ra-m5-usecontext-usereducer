import React from 'react'
import styled from 'styled-components'
import { showOptions } from '../../../constants'
import { colors, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { SelectGroup } from '../../molecules'
import { TableCell } from './styles'

const StyledIcon = styled(Icon)`
  color: ${colors.purple};
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
    color: ${colors.blue};
  }
`

const StyledTableCell = styled(TableCell).attrs({ colSpan: 2 })``

function TableFoot() {
  return (
    <tfoot>
      <tr>
        <StyledTableCell border="none">
          <FlexBox direction="row" align="center">
            <StyledIcon icon="arrow_back_ios" wght="800" />
            <Text as="b" fontSize=".7em">
              Página 1 de 50
            </Text>
            <StyledIcon icon="arrow_forward_ios" wght="800" />
          </FlexBox>
        </StyledTableCell>
        <StyledTableCell border="none" align="right">
          <SelectGroup
            id="mostrar"
            label="Mostrar"
            options={showOptions.map((opt) => ({ value: opt, text: opt }))}
          />
        </StyledTableCell>
      </tr>
    </tfoot>
  )
}

export default TableFoot
