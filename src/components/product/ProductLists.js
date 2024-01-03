import React, { useState, useContext } from 'react'
import useProducts from '../utils/useProductsList.js'
import Shimmer from "../utils/Shimmer.js";
import Product from './ProductCard.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PleaseLogin from '../auth/PleaseLogin.js';
import { UserContext } from '../auth/UserContext.js';
import { CATEGORY_URL } from '../../Constants.js';

const ProductsLists = () => {
    const { isLoggedIn } = useContext(UserContext)
    const { products, setProducts, filteredProductList, setFilteredProductList } = useProducts()
    const [filterValue, setFilterValue] = useState('');
    const [searchText, setSearchText] = useState('');


    //^ this below function filters the products based on price
    function filterBasedOnAmount(value) {
        const price = parseInt(value, 10)
        if (price === 400) {
            const priceAboveFilteredProducts = products.map(prod => prod).filter(product => product.price > price)

            setFilteredProductList(priceAboveFilteredProducts)
        } else {
            const priceFilteredProducts = products.map(prod => prod).filter(product => product.price < price)
            setFilteredProductList(priceFilteredProducts)
        }
    }
    //^ This below Function takes input search ans searches products based
    async function filterBasedOnText(text) {
        const data = await axios.get(CATEGORY_URL + text)
        setFilteredProductList(data.data.products)
        console.log(data.data.products)
    }
    //^ If Fetching Products details takes time till then AShimmer will be visible making better User Experience
    if (products === null) return <Shimmer />
    return isLoggedIn ? (
        <div className='flex-flex-col py-8 bg-gray-50'>
            <div className='w-full flex justify-center m-4'>
                <div className='w-6/12 flex justify-center'>

                    <input placeholder='Search here' className='border-b border-black outline-none px-4 bg-transparent placeholder:text-black' type="text" onChange={(e) => setSearchText(e.target.value)} />
                    <button className='ml-4 bg-blue-500 rounded-md px-6' onClick={() => filterBasedOnText(searchText)}>Search</button>
                </div>

                <div className='w-6/12'>
                    <select className='bg-transparent outline-none border-b border-black' name="" value={filterValue} id="" onChange={(e) => setFilterValue(e.target.value)}>
                        <option value="all">Filter based on price</option>
                        <option value="100">below 100</option>
                        <option value="200">below 200</option>
                        <option value="300">below 300</option>
                        <option value="400">above 400</option>
                    </select>
                    <button className=' px-6 py-1 rounded-md bg-orange-500 ml-4' onClick={() => {
                        filterBasedOnAmount(filterValue)
                    }}>Filter</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>

                {filteredProductList.map((item) => {
                    return <Link key={item.id} to={`/products/${item.id}`} > <Product item={item} /> </Link>
                })}
            </div>
        </div>
    ) : <PleaseLogin />
}

export default ProductsLists;