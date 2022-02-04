import React from 'react'
import AreaFlag from '../shared/AreaFlag'
import classes from './CompetitionCard.module.css'
import { useNavigate } from 'react-router-dom'

export default function ({data}) {
  const navigate = useNavigate();
  const competitionId = data.id
  console.log(competitionId)
  return (
    <div className={classes.CompetitionCard}
         onClick={() => navigate('/competitions/' + data.id)}
    >
      <h5>{data.name}</h5>
      <img src={data.emblemUrl} className={classes.Emblem}/>
      <AreaFlag flag={data.area.ensignUrl} name={data.area.name}/>

    </div>
  )
}