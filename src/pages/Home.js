import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/product-list/component/ProductList'
import Footer from '../features/common/Footer'
const Home = () => {
  return (
    <div>
     <Navbar>
      <ProductList></ProductList>
     </Navbar>
     <Footer/>
    </div>
  )
}

export default Home