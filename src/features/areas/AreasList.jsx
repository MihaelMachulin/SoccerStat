import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'


export default function () {
  const areasList = useSelector((state) => state.findAndSortSlice.areasList)
  const navigate = useNavigate();

  return (
    <div>
      {
        Array.isArray(areasList) ?
          areasList.length > 0 ?
            areasList.map(area => (
              <><NavLink to={`/areas/${area.id}`}>{area.name}</NavLink><br/></>
            ))
            : <p>Choose Another...</p>
          : <p>Choose Macro Region...</p>
      }
    </div>
  )
}