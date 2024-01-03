import { useEffect, useState } from "react";
import axios from "axios";
import { ID_URL } from "../../Constants.js";

const useProductCard = (prodID) => {
  
    const [prodMenu, setProdMenu] = useState(null)

    useEffect(() => {
        fetchProductCard()
    }, [])

    async function fetchProductCard() {
        const prod = await axios.get(ID_URL+prodID);
        setProdMenu(prod.data)
        
    }


    return prodMenu;
}

export default useProductCard;