

//^ Individual Product Card When User Clicks on a cart This Component will be displayed with full product data
const ProductCard = ({item}) => {
    const{title,brand, price, description,thumbnail, rating}=item
    return (
        <div className="border shadow-sm bg-white w-48 h-72 m-4 overflow-hidden p-2 rounded-lg">
            <div>
                <img className="w-44 h-36 rounded-lg" src={thumbnail} alt={title} />
            </div>
            <div>
                <ul>
                    <li className="line-clamp-1 font-bold">{title }</li>
                    <li className="line-clamp-1">Brand : { brand}</li>
                    <li className="line-clamp-1">Price : {price }</li>
                    <li className="line-clamp-1">Rating : { rating}</li>
                    <li className="line-clamp-1">{description}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProductCard;