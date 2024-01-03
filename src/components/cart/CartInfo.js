import RemoveProduct from "../assets/RemoveProduct.js";


//^ This Component Displays Product Information that has been added to CART
const CartInfo = ({ items }) => {
    return (
        <div className="flex w-full items-center justify-center ">
            <section className=" m-8 shadow-lg w-2/4 flex p-4">
                <div className="w-2/5">
                    <img className="w-56" src={items.thumbnail} alt={items.brand} />
                </div>
                <div className="flex flex-col justify-evenly">
                    <h1 className="font-bold ">{items.title}</h1>
                    <p className=""> {items.brand}</p>
                    <p className=""> ₹ {items.price} Rs</p>
                    <p className=""> {items.description}</p>
                </div>
                <RemoveProduct prodID={items.id} />
            </section>

        </div>
    )
}

export default CartInfo;