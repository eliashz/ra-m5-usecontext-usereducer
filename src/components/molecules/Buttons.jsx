import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Button, Icon } from '../atoms'

const StyledButton = styled(Button)`
  font-size: 0.7em;
  font-weight: 200;
  margin-bottom: 2em;
  margin-left: 1em;
`

const StyledIcon = styled(Icon)`
  font-size: 1.1em;
  padding-right: 2px;
`

function Buttons() {
  return (
    <FlexBox direction="row" justify="flex-end">
      <StyledButton
        background={colors.purple}
        boxShadow="none"
        cursor="initial"
      >
        Viviendas
      </StyledButton>
      <StyledButton
        background={colors.white}
        color={colors.font.base}
        border={`1px solid ${colors.grey}`}
        boxShadow="none"
        cursor="initial"
      >
        Por barrio
      </StyledButton>
      <StyledButton background={colors.green} boxShadow="none">
        <StyledIcon icon="download" />
        Descargar
      </StyledButton>
    </FlexBox>
  )
}

export default Buttons
