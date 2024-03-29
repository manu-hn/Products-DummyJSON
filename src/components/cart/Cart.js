import React, { useContext } from 'react';
import CartInfo from './CartInfo';
import { CartContext} from './CartContext';
import CartEmpty from './CartEmpty';
import BackToHome from "../assets/BackToHome.js";
import {UserContext} from "../auth/UserContext.js";
import PleaseLogin from "../auth/PleaseLogin.js";

const Cart = () => {
  const {isLoggedIn}=useContext(UserContext)
  const { cart,   }=useContext(CartContext);
  const totalPrice=cart.map(item=>item.price).reduce((total, currentProduct)=>{
    return total+currentProduct;
  },0)
 
  //^ The if condition checks if the user is logged in or not 
  //^ if true it checks if cart is empty or not and displays Cart Empty Message
  //^ If cart is not empty it displays product with total price and remove button with it
  //^ If isLoggedIn is false means user logged out or not logged in in that case Please login component wil be displayed
 if(isLoggedIn){
  if(cart.length===0)return <CartEmpty />
  return (
    <div className='flex flex-col items-center bg-white'>
      <BackToHome />
      {
        cart.map(item=>{
          return <CartInfo  key={item.id} items={item} />
        })
      }
     <div className=' w-2/4 px-2 m-4 shadow-sm'>
     <h2 className='text-right font-bold'> Total Price : ₹ {totalPrice} RS</h2>
     </div>
    </div>
  )
 }else{
  return <PleaseLogin />
 }
}

export default Cart