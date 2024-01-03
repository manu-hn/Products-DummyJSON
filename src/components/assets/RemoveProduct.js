import React, {useContext} from 'react';
import { CartContext } from '../cart/CartContext';

const RemoveProduct = ({prodID}) => {
    const {removeProduct}=useContext(CartContext);
  return (
    <div>
        <button className='rounded-md px-6 py-1 bg-red-500 m-4' onClick={()=>removeProduct(prodID)}>Remove</button>
    </div>
  )
}

export default RemoveProduct