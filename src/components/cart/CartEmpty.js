import BackToHome from "../assets/BackToHome.js";
const CartEmpty = () => {


    //^ This component is visible when there is no product is added to CART
    return (
        <div className="w-full flex justify-center m-8">
            <section className="flex flex-col justify-center w-2/4">
                <BackToHome />
                <h1 className="text-center font-bold text-red-600">Your cart is empty</h1>

            </section>
        </div>
    )
}
export default CartEmpty;