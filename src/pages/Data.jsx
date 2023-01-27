import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import BottomCell from '../components/organisms/ITATable/BottomCell'

const columns = [
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'surnames',
    label: 'Apellidos',
  },
  {
    id: 'age',
    label: 'Edad',
    cell: (row) => (
      <span style={{ color: row.age > 50 ? 'green' : 'red' }}>{row.age}</span>
    ),
  },
  {
    id: 'occupation',
    label: 'Ocupacion',
  },
]

const data = [
  {
    id: 1,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 2,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },
]

function Data() {
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
        <BottomCell />
      </Container>
    </Body>
  )
}

export default Data
