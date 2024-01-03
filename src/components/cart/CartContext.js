import { createContext, useState } from "react";

export const CartContext = createContext();


export const useCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log("Product Added", product)
        setCart(prevCart => [...prevCart, product])
    }
    


    const removeProduct = (prodId) => {
       
        const id=parseInt(prodId)
       
        setCart(prevCart => {
            const indexToRemove = prevCart.findIndex(item => item.id===id);
    
            if (indexToRemove !== -1) {
                const updatedCart = [...prevCart];
                updatedCart.splice(indexToRemove, 1);
                return updatedCart;
            }
    
            return prevCart;
        });
    }
    
    return { cart, setCart, addToCart, removeProduct };

}