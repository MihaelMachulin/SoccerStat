import { createSlice } from '@reduxjs/toolkit'

const findAndSortSlice = createSlice({
  name: 'findAndSort',
  initialState: {dateFrom: '2020-10-10', dateTo: '2020-10-15', areasList: 'Waits for areas list...'},
  reducers: {
    filterByDate: (state, action) => {
      state.dateFrom = action.payload.dateFrom
      state.dateTo = action.payload.dateTo
    },
    storeAreaList: (state, action) => {
      state.areasList = action.payload
    }
  }
})

export const { filterByDate, storeAreaList } = findAndSortSlice.actions
export default findAndSortSlice.reducer



