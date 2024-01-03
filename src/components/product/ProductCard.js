


const ProductCard = ({item}) => {
    const{title,brand, price, description,thumbnail, rating}=item
    return (
        <div className="border border-black bg-gray-100 w-48 h-72 m-4 overflow-hidden p-2 rounded-lg">
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