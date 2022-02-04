import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {filterByDate} from '../findAndSortSlice'
import * as dateFns from 'date-fns'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


export default function () {
  const dispatch = useDispatch()
  let dateFrom = ''
  let dateTo = ''

  const {
    allowedMaxDays,
    allowedDays,
    allowedRange,
    beforeToday,
    afterToday,
    combine,
  } = DateRangePicker;

  const handleRefetch = (event) => {
    dateFrom = dateFns.format(event[0], "yyyy'-'MM'-'dd" )
    dateTo   = dateFns.format(event[1], "yyyy'-'MM'-'dd" )
    dispatch(filterByDate({dateFrom, dateTo}))
  }

  return (
    <div>
      <DateRangePicker className={'rs-theme-dark'}
                       isoWeek showOneCalendar oneTap  ranges={[]}
                       hoverRange={date => [dateFns.subDays(date, 1), dateFns.addDays(date, 1)]}
                       onChange={(event) => handleRefetch(event)}
      />
    </div>
  )

}