import React from 'react'
import AdminProductDetails  from '../features/admin/component/AdminProductDetails'
import Navbar from '../features/Navbar/Navbar'

const AdminProductDetailPage = () => {
  return (
    <div>
        <Navbar>
        <AdminProductDetails></AdminProductDetails>
        </Navbar>
    </div>
  )
}

export default AdminProductDetailPage