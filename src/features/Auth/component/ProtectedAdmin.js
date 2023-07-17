import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import {selectloggedInUser} from"../AuthSlice"
import { selectUserInfo } from '../../user/userSilce'
const ProtectedAdmin = ({children}) => {
    const user=useSelector(selectloggedInUser)
    const userInfo=useSelector(selectUserInfo)
    
        if(!user){
            return <Navigate to='/login' replace={true}></Navigate>
    
        }
        if(user && userInfo.role!=='admin'){
            return <Navigate to='/' replace={true}></Navigate>
    
        }
        return children
}

export default ProtectedAdmin