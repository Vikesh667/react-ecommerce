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
import ProtectedAdmin from "./features/Auth/component/ProtectedAdmin"
import AdminHome from "./pages/AdminHome";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrderPages from "./pages/AdminOrderPages";
import {positions,Provider} from 'react-alert'
import AlertTemplate from "react-alert-template-basic"
const options={
  timeout:5000,
  position:positions.BOTTON_LEFT
}
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
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
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
    path: "/admin/productdetail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrderPages></AdminOrderPages>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
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
      <Provider template={AlertTemplate} {...options}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
