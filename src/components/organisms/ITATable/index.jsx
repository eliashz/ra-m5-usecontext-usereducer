import { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Buttons } from '../../molecules'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableFoot from './TableFoot'
import TableHeader from './TableHeader'

function Table({ columns, data, showHeader = true, isLoading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <>
      <Buttons />
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
