import PropTypes from 'prop-types'
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

  return (
    <>
      <Buttons columns={columns} data={data} />
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

Table.propTypes = {
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
  showHeader: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default ITATable
