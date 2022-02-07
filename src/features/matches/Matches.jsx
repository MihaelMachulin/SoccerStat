import React from "react";
import Match from "./Match";
import { useSelector } from 'react-redux'
import { useGetMatchesByDateQuery } from '../mainQuerySlice'


function Matches() {
  const getByDates = useSelector(state => state.findAndSortSlice)
  let { data = [], isLoading } = useGetMatchesByDateQuery(getByDates);
  const searchString = useSelector((state) => state.findAndSortSlice.searchString)
  if(data && searchString && searchString.length > 0) {
      data = data.filter((match) => {
        return match.homeTeam.name.toLowerCase().includes(searchString.toLowerCase())
          || match.awayTeam.name.toLowerCase().includes(searchString.toLowerCase())
      })
  }

  function mapMatches (matches) {
   return matches.map((match, idx)=> <Match data={match} key={'match' + idx}/>)
  }

  return (
        <div className="Content">
          { !isLoading ? mapMatches(data) : <>Loading...</> }
        </div>
  );
}

export default Matches;
