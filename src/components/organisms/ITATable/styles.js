import styled from 'styled-components'
import { colors } from '../../../styles'

export const TableCell = styled.td`
  border: ${({ border }) => border || `1px solid  ${colors.grey}`};
  text-align: ${({ align }) => align || 'left'};
  padding: 0.5rem;
`

export const TableStyled = styled.table`
  border: 1px solid ${colors.grey};
  border-collapse: collapse;
  width: 100%;
`
