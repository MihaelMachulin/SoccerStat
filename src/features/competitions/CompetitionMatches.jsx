import React from 'react'
import {useGetCompetitionsQuery} from '../pokemonSlice'
import {useParams} from 'react-router-dom'
import Match from '../matches/Match'

export default function () {
  const {compid} = useParams()
  const {data} = useGetCompetitionsQuery(compid)
  // data && console.log(compid, data.matches)
  return (
    <>
      <h1>Matches in this competition</h1><br/>
       <div className="Pokemons">
         {
           data ? data.matches.map((match, idx) => <Match data={match} key={idx}/>) : <>Loading...</>
         }
      </div>
    </>
  )
}