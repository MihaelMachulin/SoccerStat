import React from 'react'
import { useGetTeamByIdQuery } from '../pokemonSlice'
import { NavLink } from 'react-router-dom'

export default ({areaId}) {
  let { data } = useGetTeamByIdQuery(areaId)

  return (
    <NavLink to={areaId}>{data.area.name}</NavLink>
  )
}