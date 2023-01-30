import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { columns } from '../constants'
import { Container } from '../styles'

function Data() {
  const { byId } = useSelector((state) => state.houses.houses)

  const { isLoading, isSuccess, isError } = useSelector(
    (state) => state.houses.reqStatus,
  )

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable
          columns={columns}
          data={byId}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
      </Container>
    </Body>
  )
}

export default Data
