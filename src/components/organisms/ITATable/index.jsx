import { useEffect, useContext } from 'react'
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

  // Si esta cargando que muestre una tabla vacia con 4 filas y 5 columnas, y en lugar de datos muestra Shimmers
  //   Ahora mismo no tiene sentido elc ondicional sobre el TableFoot
  return (
    <>
      {!isLoading && <Buttons columns={columns} data={data} />}
      <TableStyled>
        {showHeader && <TableHeader />}
        <TableBody />
        {!isLoading && <TableFoot />}
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
