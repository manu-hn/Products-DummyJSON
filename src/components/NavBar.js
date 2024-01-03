import Cookies from "js-cookie";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cart/CartContext";
import { UserContext } from "./auth/UserContext";

const NavBar = () => {
const {isLoggedIn,login, logout}=useContext(UserContext)
    
    const {cart}=useContext(CartContext);
   

  
    return (
        <div className="flex w-full px-16 justify-between items-center h-16 border border-green-600">
            <div className="w-6/12 border border-red-500">
                <Link to="/">Products</Link>
            </div>
            <div className="border border-black w-6/12">
                <ul className="border flex justify-evenly ">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/cart'}>Cart <sup>{cart.length}</sup> </Link></li>
                    { isLoggedIn? <li> <Link to={"/no-auth"} ><button onClick={() => {
                        logout()
                    }}>Logout</button></Link> </li> : <li><Link to={'/auth'}> <button>Login</button> </Link></li>}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;