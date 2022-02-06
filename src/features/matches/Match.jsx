import React from "react";
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { parseISO } from 'date-fns'
import classes from './Match.module.css'


function Match({ data, idx, history }) {
  let navigate = useNavigate();
  const cls=[classes.Match]
  const matchDate = parseISO(data.utcDate).toString().substr(0, 24)
  let competitionData
  let currentCompetition = useSelector((state) => state.findAndSortSlice.currentCompetition)

  if(data.competition) competitionData = data.competition
    else if(currentCompetition) competitionData = currentCompetition

  return (
    <div key={'match'+idx} className={classes.Match}>
      <div className={classes.area}>
        {
          competitionData &&
              <>
              {
              competitionData.area.ensignUrl &&
                  <img
                  src={competitionData.area.ensignUrl}
                  alt={competitionData.area.name}
                  className={classes.flag}
                  />
              }
                <p>{competitionData.area.name}</p>
                <p>{competitionData.name}</p>
              </>
        }
      </div>
      <div className={classes.score}>
        <div className={classes.MatchDate}>{matchDate}</div>
        <div>Score</div>
        <Link to={`/team/${data.homeTeam.id}`}>{data.homeTeam.name}</Link>
        <Link to={`/team/${data.awayTeam.id}`}>{data.awayTeam.name}</Link>
        <div>Fulltime </div><div>{data.score.fullTime.homeTeam} </div><div>{data.score.fullTime.awayTeam} </div>
        <div>Halftime </div><div>{data.score.halfTime.homeTeam} </div><div>{data.score.halfTime.awayTeam} </div>
      </div>
    </div>
  );
}

export default Match;


