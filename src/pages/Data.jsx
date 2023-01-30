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

  //   Este loadign es falso
  const loading = [
    {
      id: 1,
      label: <img src={img.loading} alt="loading" height="30px" />,
    },
    {
      id: 2,
      label: <img src={img.loading} alt="loading" height="30px" />,
    },
    {
      id: 3,
      label: <img src={img.loading} alt="loading" height="30px" />,
    },
  ]

  //   Esto no tiene sentido, (selectedPage, ...)
  const data = Object.values(byId).splice(
    (0 + selectedPage - 1) * selectedShow,
    selectedShow,
  )

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable
          columns={isLoading ? loading : columns} // Aquí tienes que pasar columns independientemente del loading
          data={!isLoading && data} // Aquí tienes que pasar data independientemente del loading
          isLoading={isLoading}
        />
      </Container>
    </Body>
  )
}

export default Data
