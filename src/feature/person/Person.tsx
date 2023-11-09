import React from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { addperson } from './personSlice';
import './Person.css'
const Person = () => {
    const dispatch=useAppDispatch();
    const personList={
        id:'',
        name:''
    }
    const personDisplay=useAppSelector((state)=>state.person.persons)
  return (
    <div className='counter'>
      <h1>Adding New Person Dynamically</h1>
      <input type='text' placeholder='Enter your Id' name='id' onChange={(e)=>personList.id=e.target.value} className='input'></input>
      <input type='text' placeholder='Enter your Name' name='name' onChange={(e)=>personList.name=e.target.value} className='input'></input>
      <div>
        <button type='submit' className='btn btn-warning btnmargin' onClick={()=>dispatch(addperson(personList))}>Submit</button>
      </div>
      <div className='width'>
        <table  className='table table-bordered'>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {personDisplay.map(item=>{
            return(
                      <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>)
          })}

        </table>
      </div>
    </div>
  )
}

export default Person
