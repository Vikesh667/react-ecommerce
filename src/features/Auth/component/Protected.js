import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import {selectloggedInUser} from"../AuthSlice"
const Protected = ({children}) => {
    const user=useSelector(selectloggedInUser)
  
    
        if(!user){
            return <Navigate to='/login' replace={true}></Navigate>
    
        }
        return children
}

export default Protected