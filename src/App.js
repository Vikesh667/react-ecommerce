import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPages from "./pages/SignUpPages";
import Cart from "./features/Cart/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/Auth/component/Protected";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/Auth/AuthSlice";
import { fetchItemByUserIdAsync } from "./features/Cart/CartSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrderPage from "./pages/UserOrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSilce";
import Logout from "./features/Auth/component/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
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
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/productdetail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: "/orders",
    element: (
      <UserOrderPage></UserOrderPage>
    ),
  },
  {
    path: "/profile",
    element: (
      <UserProfilePage></UserProfilePage>
    ),
  },
  {
    path: "/logout",
    element: (
      <Logout></Logout>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <ForgotPasswordPage></ForgotPasswordPage>
    ),
  },
  {
    path: "*",
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
]);
function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
   
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
