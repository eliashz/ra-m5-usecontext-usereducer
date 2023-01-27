import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { columns } from '../constants'
import { Container } from '../styles'

function Data() {
  const { reqStatus, houses } = useSelector((state) => state.houses)
  const { isError, isSuccess, isLoading } = reqStatus
  const { byId } = houses
  console.log(reqStatus)
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
