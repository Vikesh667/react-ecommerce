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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
    element: <CartPage></CartPage>,
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
