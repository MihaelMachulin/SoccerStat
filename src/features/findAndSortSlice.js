import { createSlice } from '@reduxjs/toolkit'

const findAndSortSlice = createSlice({
  name: 'findAndSort',
  initialState: {dateFrom: '2020-10-10', dateTo: '2020-10-15', areasList: 'Waits for areas list...'},
  reducers: {
    filterByDate: (state, action) => {
      state.dateFrom = action.payload.dateFrom
      state.dateTo = action.payload.dateTo
      state.datesInterval = action.payload.datesIntervalInApiFormat
    },
    clearDatesInterval: (state, action) => {
      delete state.datesInterval
    },
    storeAreaList: (state, action) => {
      state.areasList = action.payload
    },
    storeCompetition: (state, action) => {
      state.currentCompetition = action.payload
    }
  }
})

export const { filterByDate, storeAreaList, storeCompetition, clearDatesInterval } = findAndSortSlice.actions
export default findAndSortSlice.reducer



