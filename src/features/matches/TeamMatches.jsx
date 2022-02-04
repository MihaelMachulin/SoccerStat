import React from "react";
import Match from "./Match";
import { useSelector } from 'react-redux'
import { useGetMatchesByTeamIdQuery } from '../pokemonSlice'
import { useParams} from 'react-router-dom'

function Matches() {
  const { teamid } = useParams()
  const { data = [] } = useGetMatchesByTeamIdQuery(teamid);

  return (
    <div className="Pokemons">
      {
        data ?
          data.length>0 ?
            data.map((match, idx)=> <Match data={match} idx={idx}/>) :
            <>No matches for this team. <br/>Choose another team.</> :
              <>Loading...</>
      }
    </div>
  );
}

export default Matches;
