import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'

const columns = [
  {
    id: 'title',
    label: 'Título',
  },
  {
    id: 'price',
    label: 'Precio',
  },
  {
    id: 'type',
    label: 'Tipo',
    /*     cell: (row) => (
      <span style={{ color: row.type > 50 ? 'green' : 'red' }}>{row.type}</span>
    ), */
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'district',
    label: 'Distrito',
  },
]

function Data() {
  const byId = useSelector((state) => state.houses.houses.byId)
  const h = useSelector((state) => state.houses)
  console.log(h)

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={byId} />
      </Container>
    </Body>
  )
}

export default Data
