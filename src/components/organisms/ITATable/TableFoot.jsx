import styled from 'styled-components'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectGroup } from '../../molecules'
import { showItems } from '../../../constants'
import { getHouses } from '../../../store/houses.slice'
import { colors, Container, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'

const StyledContainer = styled(Container)`
  border-bottom: 1px solid ${colors.grey};
  border-left: 1px solid ${colors.grey};
  border-right: 1px solid ${colors.grey};
  padding-top: 10px;
  padding-bottom: 10px;
`

const StyledSelectGroup = styled(SelectGroup)`
  &:first-of-type {
    padding: 0.01rem 0.4rem;
    border-radius: 2px;
    margin-left: 0.5rem;
    font-size: 0.7em;
  }
`

const StyledIcon = styled(Icon)`
  color: ${colors.purple};
  font-size: 1.5em;
  pointer-events: ${({ pointer }) => pointer || 'auto'};
  &:hover {
    cursor: pointer;
    color: ${colors.blue};
  }
`

function TableFoot() {
  const [page, setPage] = useState(1)
  const [items, setItems] = useState(showItems[0])
  const { houses } = useSelector((state) => state.houses)
  const { allIds } = houses
  const dispatchRedux = useDispatch()
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatchRedux(getHouses({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleItemsChange(e) {
    setPage(1)
    setItems(e.target.value)
    dispatch({ type: Actions.SET_PAGE, payload: page })
    dispatch({ type: Actions.SET_ITEMS, payload: items })
  }

  useEffect(() => {
    dispatch({ type: Actions.SET_PAGE, payload: page })
    dispatch({ type: Actions.SET_ITEMS, payload: items })
  }, [page, items, dispatch])

  return (
    <StyledContainer direction="row">
      <FlexBox direction="row" align="center">
        <StyledIcon
          icon="arrow_back_ios"
          wght="800"
          onClick={() => setPage(page - 1)}
          pointer={page === 1 && 'none'}
        />
        <Text as="b" fontSize=".7em">
          Página {page} de {Math.ceil(allIds.length / items)}
        </Text>
        <StyledIcon
          icon="arrow_forward_ios"
          wght="800"
          onClick={() => setPage(page + 1)}
          pointer={page === Math.ceil(allIds.length / items) && 'none'}
        />
      </FlexBox>
      <FlexBox align="flex-end">
        <StyledSelectGroup
          id="mostrar"
          label="Mostrar"
          defaultValue="10"
          options={showItems.map((opt) => ({ value: opt, text: opt }))}
          onChange={(e) => handleItemsChange(e)}
          weight="bold"
        />
      </FlexBox>
    </StyledContainer>
  )
}

export default TableFoot
