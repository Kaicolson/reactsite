import React from 'react';
import {useSelector} from 'react-redux';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss';

const CartDropdown =() => {
    
    const cartItemslist = useSelector(selectCartItems);

   return (

    <div className='cart-dropdown'>
        <div className='cart-items' >
   {
        cartItemslist.map(
            cartItem => (<CartItem key={cartItem.id} item={cartItem} />)
        )
    }
</div>
<CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

)};

export default CartDropdown;