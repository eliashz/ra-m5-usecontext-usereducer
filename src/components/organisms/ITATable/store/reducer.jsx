import { createNextState } from '@reduxjs/toolkit'
import { showItems } from '../../../../constants'

export const initialState = {
  data: [],
  columns: [],
  page: 1,
  items: showItems[0],
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_PAGE: 'SET_PAGE',
  SET_ITEMS: 'SET_ITEMS',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.SET_PAGE:
      return createNextState(state, (draft) => {
        draft.page = action.payload
      })
    case Actions.SET_ITEMS:
      return createNextState(state, (draft) => {
        draft.items = action.payload
      })

    default:
      return state
  }
}
