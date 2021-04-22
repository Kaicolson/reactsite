import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const { id, name, price, imageUrl } = item;
    
   return (
<div key = {id} className = 'collection-item'>
<div 
className='image'
style ={{
    backgroundImage:`url(${imageUrl})`
}}
></div>
    <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
<CustomButton inverted
onClick = { () => dispatch(addItem(item))}
>Add to Cart</CustomButton>
</div>
     
)};

export default CollectionItem;



