import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const { spacing, borderRadius } = dimensions

const ButtonStyled = styled.button`
  background-color: ${({background-color})} => ${colors.purple} || ${background-color}};
  color: white;
  border-radius: ${borderRadius.base};
  border: 0;
  padding: ${spacing.xs} ${spacing.base};
  box-shadow: ${colors.shadow.base};

  &:hover {
    cursor: pointer;
  }
`

function Button({ children, type = 'button', ...rest }) {
  console.log(rest)
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
