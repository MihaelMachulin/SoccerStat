import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { storeCompetition } from '../findAndSortSlice'
import AreaFlag from '../shared/AreaFlag'
import classes from './CompetitionCard.module.css'

export default function ({data}) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function matchesHandler (event) {
    navigate('/competitions/' + data.id)
    dispatch(storeCompetition(data))
  }
  return (
    <div className={classes.CompetitionCard}
         onClick={(event) => matchesHandler(event)}
    >
      <h5>{data.name}</h5>
      <img src={data.emblemUrl} className={classes.Emblem}/>
      <AreaFlag flag={data.area.ensignUrl} name={data.area.name}/>

    </div>
  )
}