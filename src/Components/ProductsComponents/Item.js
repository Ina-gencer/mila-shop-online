import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from '../Cart/ChangeQuantity';
import { addItemToCart } from "../../redux/cartSlice";

const Item = ({product, i}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    return (
        <div className='product-card' key={i}>
            <img src={`./${product.img}.jpg`} alt='cosmetics and perfume'/> 
            <h4>{product.name} <span> $ {product.price}</span></h4>
            <h5>Made in {product.made_in}</h5>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}
             />

            <button className="add_to_cart"
             onClick={ ()=> {dispatch(addItemToCart({product, quantity}))}}>Add to cart</button>
        </div>
    );
}

export default Item;
