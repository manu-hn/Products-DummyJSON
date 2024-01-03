import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import "./global.css";
import { CartContext, useCart } from "./components/cart/CartContext"
import { UserContext, userAuthContext } from "./components/auth/UserContext.js";

const App = () => {
    const {isLoggedIn, login, logout}=userAuthContext();
    const { addToCart, cart, setCart, removeProduct } = useCart()


    return (
        <UserContext.Provider value={{isLoggedIn, login, logout}}>
            <CartContext.Provider value={{ addToCart, cart, setCart, removeProduct }}>
                <div>

                    <NavBar />
                    <Outlet />

                </div>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

export default App;