import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Button, Icon } from '../atoms'
import { downloadTable } from '../organisms/helpers'
import { TableContext } from '../organisms/ITATable/store/context'
import { Actions } from '../organisms/ITATable/store/reducer'

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
  const { state, dispatch } = useContext(TableContext)
  const { data, columns } = state

  function sortBy(param) {
    const sortedData = Object.values(data).sort((a, b) =>
      a[param] > b[param] ? 1 : -1,
    )
    dispatch({ type: Actions.SET_DATA, payload: sortedData })
  }

  return (
    <FlexBox direction="row" justify="flex-end">
      <StyledButton
        background={colors.purple}
        boxShadow="none"
        onClick={() => sortBy('type')}
      >
        Viviendas
      </StyledButton>
      <StyledButton
        background={colors.white}
        color={colors.font.base}
        border={`1px solid ${colors.grey}`}
        boxShadow="none"
        onClick={() => sortBy('district')}
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
