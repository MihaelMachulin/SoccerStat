import React from 'react'
import { useGetTeamsByAreaQuery } from '../pokemonSlice'
import { useParams } from 'react-router-dom'
import Team from '../teams/Team'

function Teams (){
  let {id} = useParams()
  const { data } = useGetTeamsByAreaQuery(id)
  data && console.log(data)
  return (
   <div>
     <h3>Team list</h3>
       { data ? data.teams.map(team => <Team data={team}/>)  : <>Loading...</>
       }
   </div>
  )
}
//data ? data.teams.map((team, idx) => <Team id={team.id} key={idx}/>) : <>Loading...</>

export default Teams