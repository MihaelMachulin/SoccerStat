import React from "react";
import { useGetAreaByIdQuery } from '../mainQuerySlice'
import AreaFlag from '../shared/AreaFlag'

export default function ({areaId}) {
  const {data} = useGetAreaByIdQuery(areaId)
  return (
    data ?
      <AreaFlag flag={data.ensignUrl} name={data.name} />
      : <>Loading...</>
  )
}