import axios from 'axios';
import { useEffect, useState } from 'react';
import { PRODUCTS_URL } from '../../Constants.js';


const useProducts = () => {
    const [products, setProducts] = useState(null);
    const [filteredProductList,  setFilteredProductList] = useState(null)

    async function fetchProducts() {
        const data = await axios.get(PRODUCTS_URL);
        setProducts(data.data.products);
        setFilteredProductList(data.data.products)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return {products ,setProducts, filteredProductList, setFilteredProductList };

}

export default useProducts;