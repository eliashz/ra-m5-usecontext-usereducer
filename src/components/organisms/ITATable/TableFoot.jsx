import React from 'react'
import styled from 'styled-components'
import { showOptions } from '../../../constants'
import { colors, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { SelectGroup } from '../../molecules'

const TdStyled = styled(FlexBox).attrs({ as: 'td' })``
const TdStyled2 = styled.td`
  text-align: right;

`

const StyledIcon = styled(Icon)`
  color: ${colors.purple};
  font-size: 1.5em;
  cursor: pointer;
`

function TableFoot() {
  return (
    <tfoot>
      <tr>
        <TdStyled direction="row" align="center">
          <StyledIcon icon="arrow_back_ios" wght="800" />
          <Text as="b" fontSize=".7em">
            Página 1 de 50
          </Text>
          <StyledIcon icon="arrow_forward_ios" wght="800" />
        </TdStyled>
        <TdStyled2 align="flex-end">
          <SelectGroup
            id="mostrar"
            label="Mostrar"
            options={showOptions.map((opt) => ({ value: opt, text: opt }))}
          />
        </TdStyled2>
      </tr>
    </tfoot>
  )
}

export default TableFoot
