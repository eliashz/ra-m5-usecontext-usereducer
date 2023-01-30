import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urls } from '../constants'

export const getAllHouses = createAsyncThunk(
  'houses/getAllHouses',
  async () => {
    const res = await fetch(urls.houses)
    const data = await res.json()
    return data
  },
)

const initialState = {
  reqStatus: {
    status: 'initial',
    isError: false,
    isSuccess: false,
    isLoading: false,
    hasData: true,
  },
  houses: {
    byId: {},
    allIds: [],
  },
}

const housesSlice = createSlice({
  name: 'allHouses',
  initialState,
  reducers: {
    setSelectedShow(state, action) {
      state.houses.selectedShow = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHouses.pending, (state) => {
      state.reqStatus.status = 'loading'
      state.reqStatus.isLoading = true
      state.reqStatus.isError = false
      state.reqStatus.isSuccess = false
    })
    builder.addCase(getAllHouses.fulfilled, (state, action) => {
      state.reqStatus.state = 'success'
      state.reqStatus.isSuccess = true
      state.reqStatus.isLoading = false
      state.reqStatus.isError = false
      if (action.payload && action.payload.length === 0) {
        state.reqStatus.hasData = false
      }
      action.payload.forEach((house) => {
        state.houses.byId[house.id] = house
        if (!state.houses.allIds.includes(house.id)) {
          state.houses.allIds.push(house.id)
        }
      })
    })
    builder.addCase(getAllHouses.rejected, (state) => {
      state.reqStatus.status = 'failed'
      state.reqStatus.isSuccess = false
      state.reqStatus.isLoading = false
      state.reqStatus.isError = true
    })
  },
})

export const { setSelectedCity, setSelectedType, setSelectedShow } =
  housesSlice.actions
export default housesSlice.reducer
