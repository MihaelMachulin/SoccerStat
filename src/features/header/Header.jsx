import React from 'react'
import Team from '../teams/Team'
import FilterViaDate from '../shared/FilterViaDate'
import { Route, Routes, useParams, NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import Matches from '../matches/Matches'

export default function () {
  let {id} = useParams()
  return (
    <div className={classes.AppHeader}>
      <p className={classes.tittle}>Welcome to Football Leagues Statistics!</p>
      <div className={classes.menu}>
        <NavLink to='/matches'>Matches...</NavLink>
        <NavLink to='/areas'>Teams by area...</NavLink>
        <NavLink to='/competitions'>Competitions....</NavLink>
        <NavLink to='/matches'>Link4...</NavLink>
      </div>
      <div className={classes.functional}>
        <Routes>
          <Route path="/matches" exact element={<FilterViaDate />}/>
          {/*<Route path="/teams/:id" element={<Team />}/>*/}
        </Routes>
      </div>

    </div>
  )
}