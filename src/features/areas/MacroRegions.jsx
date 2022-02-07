import React from "react";
import { useGetAreaByIdQuery } from '../mainQuerySlice'
import { storeAreaList } from '../findAndSortSlice'
import { useDispatch} from 'react-redux'
import AreasList from './AreasList'
import classes from './Areas.module.css'

export default function () {
  const {data} = useGetAreaByIdQuery()
  const macroRegions = data
       ? data.areas.filter (area  =>  area.parentArea   === 'World'
      && data.areas.some   (area2 => area2.parentAreaId === area.id) )
       : []
  const dispatch = useDispatch()
  console.log(data)

  function areaHandler(macroRegionId) {
    const areasList = data ? data.areas.filter(area => area.parentAreaId === macroRegionId) : []
    dispatch(storeAreaList(areasList))
  }
  return (
    data ?
      <div>
        <div className={classes.MacroRegions}>
          {macroRegions.map(area =>
            <div onClick={() => areaHandler(area.id)}
                 className={classes.MacroRegion}
            >
              {area.name}
            </div>
          )}
        </div>
        <AreasList />
      </div>
      : <>Loading...</>
  )
}
// {areasList.map(area => <div>{area.name}</div>)}