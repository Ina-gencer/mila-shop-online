import { GiShoppingBag } from "react-icons/gi";
import  './navBar.css'

const NavBar = () => {
   
    return (
            
        <div className='nav_bar'>
            <GiShoppingBag className="shopping_bag"/>
           <span>Mila</span>
         
        </div>
    
    );
}

export default NavBar;

