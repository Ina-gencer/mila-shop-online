import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, getTotalPrice, deleteAllItems } from '../../redux/cartSlice';
import CartItem from '../Cart/CartItem';
import Filter from './Filter';
import { RiShoppingCartLine } from "react-icons/ri";




const AllCaterories = () => { 
    const cartItems = useSelector(getCartItems)
    const dispatch = useDispatch()
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div className='all_categories'>
            <h4>What product are you looking for?</h4>


            { [
             'shampoo', 
             'lipstick',
             'eyeshadow palette',
             'eyebrow pencil', 
             'gifts', 
             'mascara', 
             'face cream', 
             'foundation',
             'makeup brush',
             'perfume',
             'all'].map( (category, i) => 
             < Filter category={category}
             key={i}
             />) }
             <hr />
             <div><RiShoppingCartLine/></div>
            

             {cartItems.map((cartItem, i) => <CartItem cartItem={cartItem} key={i}/> )}
             <div>
                <button onClick={ ()=> dispatch(deleteAllItems())}>delete all</button> 
             </div>
              <p>total price: $ {totalPrice}</p> 
              
        </div>
    );
}

export default AllCaterories;
