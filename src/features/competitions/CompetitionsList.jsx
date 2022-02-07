import React from 'react'
import {useGetCompetitionsQuery} from '../mainQuerySlice'
import CompetitionCard from './CompetitionCard'
import classes from './CompetitionsList.module.css'


export default function () {
  const {data} = useGetCompetitionsQuery()
  let availableCompetitions = []
  data ? availableCompetitions = data.competitions.filter(competition => competition.plan === 'TIER_ONE') : null

  return (
    data ?
      <>
        <h2>Choose Competition</h2><br/>
        <div className={classes.CompetitionsList}>
          {availableCompetitions.map((competition, idx) => <CompetitionCard key={idx} data={competition}/>) }
        </div>
      </>
      : <>Loading...</>
  )
}