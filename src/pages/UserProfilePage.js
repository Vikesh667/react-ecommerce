import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import { UserOrders } from '../features/user/component/UserOrder'
import { UserProfile } from '../features/user/component/UserProfile'

const UserProfilePage = () => {
  return (
    <div>
        <Navbar>
            <h1 className='mx-auto text-2xl'>My Order</h1>
        <UserProfile></UserProfile>
        </Navbar>
    </div>
  )
}

export default UserProfilePage