import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, page, items } = state
  console.log((0 + page - 1) * Number(items),
  Number(items))

  let data2 = Object.values(data).slice(
    (0 + page - 1) * Number(items),
    Number(items),
  )
  console.log('DATA', data2)
  return (
    <tbody>
      {Object.values(data2).map((d) => (
        <tr key={d.id}>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell key={`${d.id}-${col.id}`}>
                {col.cell ? col.cell(d) : d[col.id]}
                {col.id === 'price' && '€'}
              </TableCell>
            ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
