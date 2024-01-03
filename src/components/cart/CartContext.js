import { createContext, useState } from "react";

//^ Creating context for cart
export const CartContext = createContext();


export const useCart = () => {
    const [cart, setCart] = useState([]);

    //^ this function handles the adding functionality
    //^ it takes the product as argument and adds it to CART array
    const addToCart = (product) => {
        console.log("Product Added", product)
        setCart(prevCart => [...prevCart, product])
    }

    
    //^ This function handles remove functionality
    //^ it takes productID as argument and filters that product from CART array and sets CART a nes list
    const removeProduct = (prodId) => {

        //^ The prodID comes as String hence converting it to Number
        const id = parseInt(prodId)

        setCart(prevCart => {
            const indexToRemove = prevCart.findIndex(item => item.id === id);

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