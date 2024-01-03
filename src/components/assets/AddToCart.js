import React, {useContext} from 'react'
import { CartContext } from '../cart/CartContext'

const AddToCart = ({data}) => {
    const {addToCart}=useContext(CartContext);
   
  return (
    <div>
        <button className='rounded-md px-6 py-1 bg-orange-500 m-4' onClick={()=>{
            addToCart(data)
        }}>Add To Cart</button>
    </div>
  )
}

export default AddToCart