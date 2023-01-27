import styled from 'styled-components'

export const TableCell = styled.td`
  border: ${({ border }) => border || '1px solid'};
  text-align: ${({ align }) => align || 'left'};
  padding: 0.5rem;
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`
