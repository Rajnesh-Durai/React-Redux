import React from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { decrement, increment } from './counterSlice';

const Counter = () => {
    const dispatch= useAppDispatch();
    const counter=useAppSelector((state)=>state.counter.count)
  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default Counter
