import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/categoriesSlice';
import { dataProducts } from '../../data/dataProducts'
import Item from './Item';


const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div className="products">
            {
                dataProducts
                .filter( product => {
                    if (selectedCategory === 'all') return true;
                    return selectedCategory === product.category
                 } )
                .map( (product, i) =>
                    <Item product={product} key={i}/>)
            }
            
         </div>
    )
}

export default Products;
