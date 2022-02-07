import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { storeCompetition } from '../findAndSortSlice'
import AreaFlag from '../shared/AreaFlag'
import classes from './CompetitionsList.module.css'

export default function ({data}) {
  const dispatch = useDispatch()
  function matchesHandler () {
    dispatch(storeCompetition(data))
  }
  return (
    <Link to={'/competitions/' + data.id}
          onClick={(event) => matchesHandler(event)}
          className={classes.CompetitionCard}
    >
      <AreaFlag flag={data.area.ensignUrl} name={data.area.name}/>
      <h5>{data.name}</h5>
      <img src={data.emblemUrl} className={classes.Emblem} alt={'Emblem'}/>

    </Link>
  )
}