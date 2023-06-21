import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import { UserOrders } from '../features/user/component/UserOrder'

const UserOrderPage = () => {
  return (
    <div>
        <Navbar>
            <h1 className='mx-auto text-2xl'>My Order</h1>
        <UserOrders></UserOrders>
        </Navbar>
    </div>
  )
}

export default UserOrderPage