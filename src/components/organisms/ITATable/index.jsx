import styled from 'styled-components'
import { useEffect, useContext } from 'react'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableCell, TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { Icon, Text } from '../../atoms'
import { FlexBox } from '../../../styles'
import { colors } from '../../../styles'

const StyledIcon = styled(Icon)`
  color: ${colors.purple};
  font-size: 1.5em;
  cursor: pointer;
`

function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <TableStyled>
      {showHeader && <TableHeader />}
      <TableBody />
      <TableCell>
        <FlexBox direction="row" align="center">
          <StyledIcon icon="arrow_back_ios" wght="800" />
          <Text as="b" fontSize=".7em">
            Página 1 de 50
          </Text>
          <StyledIcon icon="arrow_forward_ios" wght="800" />
        </FlexBox>
      </TableCell>
    </TableStyled>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
