import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { SelectGroup } from '../../molecules'
import { showOptions } from '../../../constants'
import {
  getAllHouses,
  setSelectedPageDec,
  setSelectedPageInc,
  setSelectedPageInitial,
  setSelectedShow,
} from '../../../store/houses.slice'
import { colors, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { TableCell } from './styles'

const StyledTableCell = styled(TableCell).attrs({ colSpan: 3 })``

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
  const { houses } = useSelector((state) => state.houses)
  const { allIds, selectedPage, selectedShow } = houses

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHouses())
  }, [dispatch])

  function handleShowChange(e) {
    dispatch(setSelectedShow(e.target.value))
    dispatch(setSelectedPageInitial())
  }

  return (
    <tfoot>
      <tr>
        <StyledTableCell border="none">
          <FlexBox direction="row" align="center">
            <StyledIcon
              icon="arrow_back_ios"
              wght="800"
              onClick={() => dispatch(setSelectedPageDec())}
              pointer={selectedPage === 1 && 'none'}
            />
            <Text as="b" fontSize=".7em">
              Página {selectedPage} de {Math.ceil(allIds.length / selectedShow)}
            </Text>

            <StyledIcon
              icon="arrow_forward_ios"
              wght="800"
              onClick={() => dispatch(setSelectedPageInc())}
              pointer={
                selectedPage === Math.ceil(allIds.length / selectedShow) &&
                'none'
              }
            />
          </FlexBox>
        </StyledTableCell>
        <StyledTableCell border="none" align="right">
          <StyledSelectGroup
            id="mostrar"
            label="Mostrar"
            defaultValue="10"
            options={showOptions.map((opt) => ({ value: opt, text: opt }))}
            onChange={(e) => handleShowChange(e)}
            weight="bold"
          />
        </StyledTableCell>
      </tr>
    </tfoot>
  )
}

export default TableFoot
