import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { SelectGroup } from '../../molecules'
import { showOptions } from '../../../constants'
import { getHouses } from '../../../store/houses.slice'
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
  const dispatch = useDispatch()
  const [showValue, setShowValue] = useState(showOptions[0])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(getHouses(currentPage))
  }, [currentPage, dispatch])

  return (
    <tfoot>
      <tr>
        <StyledTableCell border="none">
          <FlexBox direction="row" align="center">
            <StyledIcon
              icon="arrow_back_ios"
              wght="800"
              onClick={() => setCurrentPage(currentPage - 1)}
              pointer={currentPage === 1 && 'none'}
            />
            <Text as="b" fontSize=".7em">
              Página {currentPage} de 50
            </Text>

            <StyledIcon
              icon="arrow_forward_ios"
              wght="800"
              onClick={() => setCurrentPage(currentPage + 1)}
              pointer={currentPage === 5 && 'none'}
            />
          </FlexBox>
        </StyledTableCell>
        <StyledTableCell border="none" align="right">
          <StyledSelectGroup
            id="mostrar"
            label="Mostrar"
            defaultValue="10"
            options={showOptions.map((opt) => ({ value: opt, text: opt }))}
            onChange={(e) => setShowValue(e.target.value)}
            weight="bold"
          />
        </StyledTableCell>
      </tr>
    </tfoot>
  )
}

export default TableFoot
