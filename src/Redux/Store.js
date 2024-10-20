import { configureStore } from "@reduxjs/toolkit"
import Userslice from "./Userslice"



const Userstore=configureStore({
    reducer:{
Usersreducer:Userslice
    }
})

export default Userstore