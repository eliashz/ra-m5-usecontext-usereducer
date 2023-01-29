import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { columns, urls } from '../constants'
import { Container } from '../styles'

function Data() {
  const { byId, allIds } = useSelector((state) => state.houses.houses)
  //const { isLoading } = useSelector((state) => state.houses.reqStatus)
  const isLoading = true
  const loading = [
    {
      type: <img src={urls.loading} alt="loading" height="30px" />,
    },
    {
      type: <img src={urls.loading} alt="loading" height="30px" />,
    },
  ]

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable
          columns={isLoading ? [{ id: 'type', label: 'Cargando...' }] : columns}
          data={isLoading ? loading : byId}
          isLoading={isLoading}
        />
      </Container>
    </Body>
  )
}

export default Data
