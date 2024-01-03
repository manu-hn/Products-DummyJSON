import React from "react";
import Shimmer from "../utils/Shimmer.js";
import { useParams } from "react-router-dom";
import useProductCard from "../utils/useProductCard";
import BackToHome from "../assets/BackToHome.js";
import AddToCart from "../assets/AddToCart.js";
import RemoveProduct from "../assets/RemoveProduct.js";


const ProductInfo = () => {
    const { prodID } = useParams();

    const data = useProductCard(prodID)

    //^ If the data fetch takes time Shimmer Effect will be visible till then
    if (data === null) return <Shimmer />

    return (
        <div className="flex flex-col w-full items-center m-8 h-[30rem]">
            <section className="w-full">
                <BackToHome />
            </section>
            <div className="flex w-2/4 justify-between border shadow-md p-4">
                <div className="mx-4 ">
                    <img className="w-56 h-72" src={data.images[1]} alt={data.brand} />

                </div>
                <div className="mx-2 h-[20rem]  flex flex-col justify-evenly overflow-hidden">
                    <h1 className="font-bold text-2xl">{data.title}</h1>
                    <h1 className="">{data.brand}</h1>
                    <p className="">In Stock <span className="text-green-500">{data.stock} <sup className="text-orange-500">Hurry Up</sup> </span></p>
                    <p className="">Price : {data.price}</p>
                    <p className="">Rating : {data.rating}</p>
                    <p className=" line-clamp-1">{data.description}</p>

                </div>
            </div>
            <div className="m-4 w-2/6 flex justify-between">
                <AddToCart data={data} />
                <RemoveProduct prodID={prodID} />

            </div>
        </div>
    )
}

export default ProductInfo;