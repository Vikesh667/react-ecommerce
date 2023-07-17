import React, { useEffect } from 'react'
import { selectloggedInUser, signOutAsync } from '../AuthSlice'
import{useDispatch, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
const Logout = () => {
const dispatch=useDispatch()


const user=useSelector(selectloggedInUser)
    useEffect(()=>{
        dispatch(signOutAsync())
    })
  return (
    <>
    {!user && <Navigate to="/" replace={true}></Navigate>}
    </>
  )
}

export default Logout