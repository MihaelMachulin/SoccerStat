import React from 'react'
import { useGetTeamsByAreaQuery } from '../pokemonSlice'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Team from '../teams/Team'

function Teams (){
  let {id} = useParams()
  const { data } = useGetTeamsByAreaQuery(id)
  const chooseAnother = (<Link to={'/areas'}>
                            Choose another...
                         </Link>)
  data && console.log(data)
  return (
   <div>
     <h3>Team list</h3>
       {
         data ?
           data.count === 0 ?
             <h5>
               <p>No teams in this area.</p>
                     {chooseAnother}
             </h5>
             :
             <>
               <h5>{chooseAnother}</h5>
               {data.teams.map(team => <Team data={team}/>)}
             </>
           : <>Loading...</>
       }
   </div>
  )
}
//data ? data.teams.map((team, idx) => <Team id={team.id} key={idx}/>) : <>Loading...</>

export default Teams