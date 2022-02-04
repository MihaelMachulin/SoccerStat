import React from "react";
import { useGetAreaByIdQuery } from '../pokemonSlice'
import { storeAreaList } from '../findAndSortSlice'
import { useDispatch} from 'react-redux'
import AreasList from './AreasList'

export default function () {
  const {data} = useGetAreaByIdQuery()
  const macroRegions = data
       ? data.areas.filter (area  =>  area.parentArea   === 'World'
      && data.areas.some   (area2 => area2.parentAreaId === area.id) )
       : []
  const dispatch = useDispatch()

  function areaHandler(macroRegionId) {
    const areasList = data ? data.areas.filter(area => area.parentAreaId === macroRegionId) : []
    dispatch(storeAreaList(areasList))
  }
  return (
    data ?
      <div>
        {macroRegions.map(area =>
          <div onClick={() => areaHandler(area.id)}>
            {area.name}
          </div>
        )}
        <AreasList />
      </div>
      : <>Loading...</>
  )
}
// {areasList.map(area => <div>{area.name}</div>)}