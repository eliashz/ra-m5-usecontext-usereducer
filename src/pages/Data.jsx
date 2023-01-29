import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { columns, img } from '../constants'
import { Container } from '../styles'

function Data() {
  const { byId, selectedPage, selectedShow } = useSelector(
    (state) => state.houses.houses,
  )
  //const { isLoading } = useSelector((state) => state.houses.reqStatus)
  const isLoading = false

  //console.log('is', isLoading)

  const loading = [
    {
      type: <img src={img.loading} alt="loading" height="30px" />,
    },
    {
      type: <img src={img.loading} alt="loading" height="30px" />,
    },
  ]
  const data = Object.values(byId).splice(
    Number(selectedPage) * Number(selectedShow) - 1,
    Number(selectedShow),
  )
  console.log(data, selectedShow, selectedPage)
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable
          columns={isLoading ? [{ id: 'type', label: 'Cargando...' }] : columns}
          data={isLoading ? loading : data}
          isLoading={isLoading}
        />
      </Container>
    </Body>
  )
}

export default Data
