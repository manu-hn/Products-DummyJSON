import {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cart/CartContext";
import { UserContext } from "./auth/UserContext";


//^ Navigation Bar
const NavBar = () => {
const {isLoggedIn, logout}=useContext(UserContext)
    
    const {cart}=useContext(CartContext);
   

  
    return (
        <div className="flex w-full px-16 justify-between items-center h-16 border bg-orange-400">
            <div className="w-6/12">
                <Link to="/"><h1 className="font-bold underline">ProductsCart</h1></Link>
            </div>
            <div className="w-6/12">
                <ul className=" flex justify-evenly ">
                    <li className="text-white hover:text-black font-semibold"><Link to={'/'}>Home</Link></li>
                    <li className="text-white hover:text-black font-semibold"><Link to={'/about'}>About</Link></li>
                    <li className="text-white hover:text-black font-semibold"><Link to={'/cart'}>Cart <sup>{cart.length }</sup> </Link></li>
                    { isLoggedIn? <li> <Link to={"/no-auth"} ><button className="px-8 py-1 text-white rounded-md bg-red-500" onClick={() => {
                        logout()
                    }}>Logout</button></Link> </li> : <li><Link to={'/auth'}> <button className="px-8 py-1 rounded-md bg-blue-200 text-black">Login</button> </Link></li>}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;