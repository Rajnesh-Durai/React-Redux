import React from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { decrement, increment } from './counterSlice';

const Counter = () => {
    const dispatch= useAppDispatch();
    const counter=useAppSelector((state)=>state.counter.count)
  return (
    <div className='counter'>
      <h1>Normal Counter Using Redux</h1>
      <h1>{counter}</h1>
      <div>
        <button onClick={()=>dispatch(increment())} className='btn btn-primary btndiv'>+</button>
        <button onClick={()=>dispatch(decrement())} className='btn btn-primary'>-</button>
      </div>
    </div>
  )
}

export default Counter
