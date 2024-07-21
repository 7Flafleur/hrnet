import { createSlice } from '@reduxjs/toolkit';


const UserListSlice = createSlice({
  name:"user",
  initialState:[],
  reducers:{
    addUser: (state,action) => {
      if(action.payload){
        state.user=action.payload
      }
      else{
        console.error("Invalid data")
      }
    },
    removeUser: (state,action) => {
      return state.filter((user) => user.id !== action.payload)
    }
    

    
  }
})

export const {addUser, removeUser} = UserListSlice.actions;
export default UserListSlice;