import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems } from "../../redux/cartSlice";  


const Cart = () => {
     const cartItems = useSelector(getCartItems)
   
    return (
        <div>
           {cartItems.map((cartItem, i) => <CartItem cartItem={cartItem} key={i}/> )} 
        </div>
    );
}

export default Cart;
