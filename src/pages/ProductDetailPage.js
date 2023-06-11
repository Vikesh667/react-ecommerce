import React from 'react'
import ProductDetails from '../features/product-list/component/ProductDetails'
import Navbar from '../features/Navbar/Navbar'

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar>
        <ProductDetails></ProductDetails>
        </Navbar>
    </div>
  )
}

export default ProductDetailPage