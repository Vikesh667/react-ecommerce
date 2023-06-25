import React from 'react'
import ProductDetails from '../features/product-list/component/ProductDetails'
import Navbar from '../features/Navbar/Navbar'
import Footer from '../features/common/Footer'

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar>
        <ProductDetails></ProductDetails>
        </Navbar>
        <Footer/>
    </div>
  )
}

export default ProductDetailPage