import { createSlice } from "@reduxjs/toolkit";
import Userslists from "./Data";




const userslice=createSlice({
    name:"users",
    initialState:Userslists
        
   
       

    ,
    reducers:{
        addusers(state,action){
          state.push(action.payload)
        },
        
updateusers(state,action){
  const{id,thought}=action.payload
 const userindex= state.findIndex((users=>users.id==id))
 if(userindex!==-1){
 state[userindex].thought=thought;
 }
},

deleteusers(state,action){
  const{id}=action.payload
  const userindex= state.findIndex((users=>users.id==id))
  if (userindex !== -1) {
    state.splice(userindex, 1);
  }

}
        },

       
      
       
        
    
})

export default userslice.reducer
export const{addusers,updateusers,deleteusers}=userslice.actions