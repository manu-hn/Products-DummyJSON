import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/nav/About.js"
import Cart from "./components/cart/Cart.js"
import ProductsLists from "./components/product/ProductLists.js";
import ProductInfo from "./components/product/ProductInfo.js";
import Login from "./components/auth/Login.js";
import PleaseLogin from "./components/auth/PleaseLogin.js";
import Error from "./components/error/Error.js";


const rootRouter=createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : "/",
                element :<ProductsLists />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : '/auth',
                element : <Login />
            },
            {
                path : '/products/:prodID',
                element : <ProductInfo />
            },
            {
                path : "/no-auth",
                element: <PleaseLogin/>
            }
        ],
        errorElement : <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={rootRouter} />);