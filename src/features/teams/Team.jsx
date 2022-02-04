import React from "react";
import { NavLink } from 'react-router-dom'
import { useGetTeamByIdQuery } from '../pokemonSlice'
import {useParams} from 'react-router-dom'
import GetArea from '../areas/GetArea'
import classes from './Team.module.css'

function Team (props) {
  let { id } = useParams()
  props.id ? id = props.id : null
  let { data } = useGetTeamByIdQuery(id)
  props.data ? data = props.data : null
  return (
    data ?
    <NavLink to={`/team-matches/${data.id}`} className={classes.TeamRow}>
      <figure>
        <a href={data.website}>
          <img src={data.crestUrl} alt={data.name} height={'100px'}/>
          <figcaption>{data.shortName}</figcaption>
        </a>
      </figure>
      <p className={classes.area}>
       <GetArea areaId={data.area.id} />
      </p>

      <h4 className={classes.title}>{data.name} ({data.tla})</h4>

      <p className={classes.row2}>
        Club colors: {data.clubColors} Venue: {data.venue}
      </p>
      <p className={classes.row3}>
        Phone: {data.phone}   Email: {data.email}
      </p>
    </NavLink>
      : <div>Loading...</div>
  )
}

export default Team