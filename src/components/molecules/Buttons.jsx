import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Button, Icon } from '../atoms'
import { downloadTable } from '../organisms/helpers'
import { TableContext } from '../organisms/ITATable/store/context'

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
  const { state } = useContext(TableContext)
  const { data, columns } = state
  
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
      <StyledButton
        background={colors.green}
        boxShadow="none"
        onClick={() => downloadTable(columns, data)}
      >
        <StyledIcon icon="download" />
        Descargar
      </StyledButton>
    </FlexBox>
  )
}

export default Buttons
