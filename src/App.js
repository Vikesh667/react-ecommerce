import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPages from './pages/SignUpPages';
import Cart from './features/Cart/Cart';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/Auth/component/Protected';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home></Home></Protected> 
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPages></SignUpPages>,
  },
  {
    path: "/cartpage",
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element:  <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/productdetail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  }
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />

    </div>
  );
}

export default App;
