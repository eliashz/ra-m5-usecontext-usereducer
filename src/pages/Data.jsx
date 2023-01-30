import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { columns } from '../constants'
import { Container } from '../styles'

function Data() {
  const { byId, selectedPage, selectedShow } = useSelector(
    (state) => state.houses.houses,
  )
  //const { isLoading } = useSelector((state) => state.houses.reqStatus)
  const isLoading = false
  
  
  const data = Object.values(byId).splice(
    (0 + selectedPage - 1) * selectedShow,
    selectedShow,
  )

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} isLoading={isLoading} />
      </Container>
    </Body>
  )
}

export default Data
