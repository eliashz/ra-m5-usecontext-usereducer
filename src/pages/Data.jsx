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
    cell: (row) => (
      <span style={{ color: row.type > 50 ? 'green' : 'red' }}>{row.type}</span>
    ),
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

const data = [
  {
    id: 1,
    title: 'Duplex',
    price: '200.000€',
    type: 'casa',
    city: 'Madrid',
    district: 'Lavapiés',
  },
  {
    id: 2,
    title: 'Garaje grande',
    price: '450.000€',
    type: 'garaje',
    city: 'Barcelona',
    district: 'Sant Andreu',
  },
]

function Data() {
  const byId = useSelector((state) => state.houses.houses.byId)
  console.log(byId)

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={byId} />
      </Container>
    </Body>
  )
}

export default Data
