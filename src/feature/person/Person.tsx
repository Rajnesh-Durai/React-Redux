import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addperson } from './personSlice';

const Person = () => {
    const dispatch=useAppDispatch();
    const personList={
        id:'',
        name:''
    }
  return (
    <div>
      <input type='text' placeholder='Enter your Id' name='id' onChange={(e)=>personList.id=e.target.value}></input>
      <input type='text' placeholder='Enter your Name' name='name' onChange={(e)=>personList.name=e.target.value}></input>
      <div>
        <button type='submit' onClick={()=>dispatch(addperson(personList))}>Submit</button>
      </div>
    </div>
  )
}

export default Person
