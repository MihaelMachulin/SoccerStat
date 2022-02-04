import React from "react";
import Match from "./Match";
import { useSelector } from 'react-redux'
import { useGetMatchesByDateQuery, useGetTeamByIdQuery, useGetMatchesByTeamIdQuery } from '../pokemonSlice'

function Matches() {
  const getByDates = useSelector(state => state.findAndSortSlice)
  const { data = [], error, isLoading } = useGetMatchesByDateQuery(getByDates);
  const { data2 = [] } = useGetTeamByIdQuery();

  return (
      <div className="Pokemons">
        {
          !isLoading ? data.map((match, idx)=> <Match data={match} idx={idx}/>) : <>Loading...</>
        }
      </div>

  );
}

export default Matches;
