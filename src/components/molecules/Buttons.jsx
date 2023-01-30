import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Button, Icon } from '../atoms'
import { downloadTable } from '../organisms/helpers'

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

function Buttons({ columns, data }) {
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

Buttons.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      district: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
}

export default Buttons
