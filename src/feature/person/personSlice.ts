import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface personState{
    id:string,
    name:string
}

interface personArray{
    persons:personState[]
}

const initialState={
    persons:[]
} as personArray

export const personSlice = createSlice({
    name:'person',
    initialState,
    reducers:{
        addperson:(state,action:PayloadAction<{id:string,name:string}>)=>{
            state.persons.push({
                id:action.payload.id,
                name:action.payload.name
            })
            console.log(action.payload.id)
        }
    }
})

export const {addperson}=personSlice.actions;
export default personSlice.reducer