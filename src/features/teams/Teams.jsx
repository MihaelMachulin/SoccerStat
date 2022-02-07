import React from 'react'
import { useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Team from '../teams/Team'
import { useGetTeamsByAreaQuery } from '../mainQuerySlice'
import classes from './Team.module.css'

function Teams (){
  const {areaid} = useParams()
  const { data } = useGetTeamsByAreaQuery(areaid)
  const searchString = useSelector((state) => state.findAndSortSlice.searchString)
  let teams
  if(data) {
    teams = data.teams
    if(searchString && searchString.length > 0) {
      teams = teams.filter((team) =>
        team.name.toLowerCase()
          .includes(searchString.toLowerCase()))
    }
  }

  function mapTeams (rawTeams) {
    return rawTeams.map((team, idx) => (
      <Team data={team} key={'team' + idx}/>
    ))}

  const chooseAnother = (
    <Link to={'/areas'}> Choose another... </Link>
  )

  return (
   <div className={classes.Teams}>
     <h3>Team list</h3>
       {
         teams ?
           teams.count === 0 ?
             <h5>
               <p>No teams in this area.</p>
                     {chooseAnother}
             </h5>
             :
             <>
               <h5>{chooseAnother}</h5>
                     {mapTeams(teams)}
             </>
           : <>Loading...</>
       }
   </div>
  )
}
//data ? data.teams.map((team, idx) => <Team id={team.id} key={idx}/>) : <>Loading...</>

export default Teams