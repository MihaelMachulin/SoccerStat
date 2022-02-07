import React from 'react'
import FormInput from './FormInput'
import { storeSearchString } from '../findAndSortSlice'
import { useDispatch } from 'react-redux'

export default function ({title}) {
  const dispatch = useDispatch()
  return (
    <div>
      <h5>{title}</h5>
      <FormInput onChange={(value) => dispatch(storeSearchString(value))}/>
    </div>
  )
}
