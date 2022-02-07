import React from 'react'
import { useDispatch } from 'react-redux'
import {filterByDate, clearDatesInterval} from '../findAndSortSlice'
import * as dateFns from 'date-fns'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


export default function ({oneTapOn, title}) {
  const dispatch = useDispatch()
  let dateFrom = ''
  let dateTo = ''

  const handleRefetch = (event) => {
    if (event) {
      dateFrom = dateFns.format(event[0], "yyyy'-'MM'-'dd" )
      dateTo   = dateFns.format(event[1], "yyyy'-'MM'-'dd" )
      const datesInterval = dateFns.eachDayOfInterval({start: event[0], end: event[1]})
      const datesIntervalInApiFormat = datesInterval.map((date) => dateFns.format(date, "yyyy'-'MM'-'dd" ) )

      dispatch(filterByDate({dateFrom, dateTo, datesIntervalInApiFormat}))
    }
  }

  const handleClearDatesInterval = () => {
    dispatch(clearDatesInterval())
  }

  return (
    <div>
      <h5>{title}</h5>
      {
      oneTapOn === 1 ?
      <DateRangePicker className={'rs-theme-dark'}
                       isoWeek showOneCalendar ranges={[]}
                       hoverRange={date => [dateFns.subDays(date, 5), dateFns.addDays(date, 5)]}
                       oneTap
                       onClean={() => handleClearDatesInterval()}
                       onChange={(event) => handleRefetch(event)}
      />
      :
      <DateRangePicker className={'rs-theme-dark'}
                       isoWeek showOneCalendar ranges={[]}
                       onClean={() => handleClearDatesInterval()}
                       onChange={(event) => handleRefetch(event)}
      />
      }
    </div>
  )

}