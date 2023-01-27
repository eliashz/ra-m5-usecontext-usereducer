import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const { spacing, borderRadius } = dimensions

const ButtonStyled = styled.button`
  background-color: ${({ background }) => background || colors.purple};
  color: ${({ color }) => color || colors.white};
  border-radius: ${({ radius }) => radius || borderRadius.base};
  border: ${({ border }) => border || 0};
  padding: ${spacing.xs} ${spacing.base};
  box-shadow: ${({ boxShadow }) => boxShadow || colors.shadow.base};

  &:hover {
    cursor: ${({ cursor }) => cursor || 'pointer'};
  }
`

function Button({ children, type = 'button', ...rest }) {
  return (
    <ButtonStyled type={type} {...rest}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

export default styled(Button)``
