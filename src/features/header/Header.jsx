import React from 'react'
import FilterViaDate from '../shared/FilterViaDate'
import { Route, Routes, NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export default function () {
  return (
    <div className={classes.AppHeader}>
      <p className={classes.tittle}>Welcome to Football Leagues Statistics!</p>
      <div className={classes.menu}>
        <NavLink to='/matches'>Matches by period...</NavLink>
        <NavLink to='/areas'>Teams by area...</NavLink>
        <NavLink to='/competitions'>Competitions....</NavLink>
        <NavLink to='/matches'>Link4...</NavLink>
      </div>
      <div className={classes.functional}>
        <Routes>
          <Route path="/matches" exact element={<FilterViaDate oneTapOn={1}/>}/>
          <Route path="/competitions/:compid" element={<FilterViaDate />}/>
          <Route path="/team-matches/:teamid" element={<FilterViaDate />}/>
        </Routes>
      </div>

    </div>
  )
}