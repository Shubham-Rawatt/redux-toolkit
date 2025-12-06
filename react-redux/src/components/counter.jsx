import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { increaseby1 , decreaseby1 } from '../features/task/taskSlice'

const dispatch = useDispatch()
const Counter = () => {

    const count = useSelector((state) => state.counter)

  return (
    <div>
        <h2> Counter = {count} </h2> 
        <button onClick={()=>dispatch(increaseby1())}>increaseby1</button>
        <button onClick={()=>dispatch(decreaseby1())}>decreaseby1</button>
    
    </div>
  )
}

export default Counter