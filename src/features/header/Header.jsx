import React from 'react'
import FilterByDate   from '../shared/FilterByDateRange'
import FilterByString from '../shared/FilterByString'
import { Route, Routes, NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export default function () {
  return (
    <div className={classes.AppHeader}>
      <p className={classes.tittle}>Welcome to Football Leagues Statistics!</p>
      <div className={classes.menu}>
        <NavLink to='/matches'>1111Matches by period...</NavLink>
        <NavLink to='/areas'>Teams by area...</NavLink>
        <NavLink to='/competitions'>Competitions....</NavLink>
      </div>
      <div className={classes.functional}>
        <Routes>
          <Route path="/" exact element={<FilterByDate oneTapOn={1} title={'Select 10 days range'}/>}/>
          <Route path="/matches" exact element={<FilterByDate oneTapOn={1} title={'Select 10 days range'}/>}/>
          <Route path="/competitions/:compid" element={<FilterByDate />}/>
          <Route path="/team-matches/:teamid" element={<FilterByDate />}/>
        </Routes>
        <Routes>
          <Route path="/matches" exact element={<FilterByString title={'Enter team name:'}/>}/>
          <Route path="/areas/:areaid" element={<FilterByString title={'Enter team name:'}/>}/>
        </Routes>
      </div>

    </div>
  )
}