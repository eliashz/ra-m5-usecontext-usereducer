import { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Buttons } from '../../molecules'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableFoot from './TableFoot'
import TableHeader from './TableHeader'

function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)
  //   Use selector fuera de aquí, pasale el isLoading al componente desde fuera
  const { isError, isLoading } = useSelector((state) => state.houses.reqStatus)
  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <>
      {/* En lugar de tener un Loading..., pon una tabla vacia sin datos, con 4 y 3 columnas (por ejemplo) y que dentro tengan un Shimmer de cargando */}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
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
