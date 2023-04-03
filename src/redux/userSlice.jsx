import { createSlice } from '@reduxjs/toolkit'




export const counterSlice = createSlice({
  name: 'user',
  initialState : {
    name : "",
    email : ""
  },
  reducers: {
addUser :(state,actions)=>{
    state.name = actions.payload.name;
    state.email = actions.payload.email;
}

}   

})

export const { addUser } = counterSlice.actions

export default counterSlice.reducer