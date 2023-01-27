import { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { colors, FlexBox } from '../../../styles'
import { Button } from '../../atoms'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableFoot from './TableFoot'
import TableHeader from './TableHeader'

const StyledButton = styled(Button)`
  font-size: 0.7em;
  font-weight: 200;
  margin-bottom: 2em;
  margin-left: 1em;
`

function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)
  const { isError, isLoading } = useSelector((state) => state.houses.reqStatus)
  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <FlexBox direction="row" justify="flex-end">
        <StyledButton background-color={colors.blue}>Viviendas</StyledButton>
        <StyledButton padding="1em 2em">Por barrio</StyledButton>
        <StyledButton padding="1em 2em">Descargar</StyledButton>
      </FlexBox>
      <TableStyled>
        {showHeader && <TableHeader />}
        <TableBody />
        <TableFoot />
      </TableStyled>
    </>
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
