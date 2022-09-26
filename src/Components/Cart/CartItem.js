import { useDispatch } from 'react-redux';
import { dataProducts } from '../../data/dataProducts'
 import { RiDeleteBin6Line } from "react-icons/ri";
 import {removeItemFromCart } from '../../redux/cartSlice'



const CartItem = ({cartItem, i}) => {
      const products = dataProducts.find( item => item.id === cartItem.productId )
      const dispatch = useDispatch();
     
   

    return (
        <div>
          <div className="cartItems" key={i}>
            <p>product : {products.name}  </p>
            <p>price: $ {products.price}</p>
            <p> quntity: {cartItem.quantity} </p>
            <p className='sum'>sum: $ {products.price * cartItem.quantity} </p>  
             <RiDeleteBin6Line  onClick={ ()=> dispatch(removeItemFromCart({cartItemId: cartItem.id}))}/> 
             
        </div> 
       
      

        </div>
    );
}

export default CartItem;
