import React from "react";
import Match from "./Match";
import { useSelector } from 'react-redux'
import { useGetMatchesByTeamIdQuery } from '../mainQuerySlice'
import { useParams} from 'react-router-dom'
// TODO этот компонент - идентичен CompetitionMatches.jsx - объединить
function Matches() {
  const { teamid } = useParams()
  const { data = [] } = useGetMatchesByTeamIdQuery(teamid);
  data && console.log(data)
  let matches
  if(data) matches = JSON.parse(JSON.stringify(data)).reverse()

  const {datesInterval} = useSelector(state => state.findAndSortSlice)

  return (
    <>
      <h1>Matches of selected team</h1><br/> {/*TODO Вывести название команды*/}
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
  );
}

export default Matches;
