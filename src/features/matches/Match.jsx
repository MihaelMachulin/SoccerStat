import React from "react";
import { useNavigate } from 'react-router-dom'
import classes from './Match.module.css'


function Match({ data, idx, history }) {
  let navigate = useNavigate();
  const cls=[classes.Match]
  console.log(data)
  return (
    <div key={'match'+idx} className={classes.Match}>
      <div className={classes.area}>
          <img
            src={data.competition && data.competition.area.ensignUrl}
            alt={data.competition && data.competition.area.name}
            className={classes.flag}
          /><br/>
          {data.competition && data.competition.name}
      </div>
      <div className={classes.score}>
        <div>Score</div>
        <div onClick={() => navigate(`/team/${data.homeTeam.id}`)}>{data.homeTeam.name}</div>
        <div onClick={() => navigate(`/team/${data.awayTeam.id}`)}>{data.awayTeam.name}</div>
        <div>Fulltime </div><div>{data.score.fullTime.homeTeam} </div><div>{data.score.fullTime.awayTeam} </div>
        <div>Halftime </div><div>{data.score.halfTime.homeTeam} </div><div>{data.score.halfTime.awayTeam} </div>
      </div>
    </div>
  );
}

export default Match;


