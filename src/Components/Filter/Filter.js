import { getSelectedCategory, filterCategory } from '../../redux/categoriesSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch()

    return (
        <div>
            <p onClick={ ()=> {dispatch(filterCategory(category))}} 
            className={ selectedCategory === category
             ? 'categoryButtonSelected categoryButton'
            : 'categoryButton'}>
                {category}
            </p>
        </div>
    );
}

export default Filter;
