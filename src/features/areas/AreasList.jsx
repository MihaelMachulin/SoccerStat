import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classes from './Areas.module.css'

export default function () {
  const areasList = useSelector((state) => state.findAndSortSlice.areasList)

  return (
    <div>
      {
        Array.isArray(areasList) ?
          areasList.length > 0 ?
            <div className={classes.Areas}>
              {areasList.map(area => (
                <NavLink to={`/areas/${area.id}`}>{area.name}</NavLink>
              ))}
            </div>
            : <p>Choose Another...</p>
          : <p>Choose Macro Region...</p>
      }
    </div>
  )
}