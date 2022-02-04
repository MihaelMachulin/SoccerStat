import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Area from './GetArea'


export default function () {
  const areasList = useSelector((state) => state.findAndSortSlice.areasList)
  return (
    <div>
      {
        Array.isArray(areasList) ? areasList.length > 0 ?
          areasList.map(area => (
              <><NavLink to={`${area.id}`}>{area.name}</NavLink><br/></>
            )) : <p>Choose Another...</p>  : <p>Choose Macro Region...</p>
      }
    </div>
  )
}