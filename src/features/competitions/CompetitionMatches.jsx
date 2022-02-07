import React from 'react'
import {useGetCompetitionsQuery} from '../mainQuerySlice'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import Match from '../matches/Match'

export default function () {
  const {compid} = useParams()
  const {data} = useGetCompetitionsQuery(compid)
  let matches
  if(data) matches = JSON.parse(JSON.stringify(data.matches)).reverse()

  const {datesInterval} = useSelector(state => state.findAndSortSlice)

  return (
    <>
      <h1>Matches in this competition</h1><br/>
       <div className="Content">
         {
           data
             ? matches.map((match, idx) => (
               <>
                 {
                   !datesInterval ? <Match data={match} key={idx}/>
                     :
                   datesInterval.includes(match.utcDate.substr(0, 10)) && <Match data={match} key={idx}/>
                 }
               </>
             ))
             : <>Loading...</>
         }
      </div>
    </>
  )
}