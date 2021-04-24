import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectedCartItemCount} from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = () => {
    const dispatch = useDispatch();
       console.log('i am being called Cart Icon'); //testing component re-rendering
    const itemCount = useSelector(selectedCartItemCount);

    return (
<div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
<ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span> 

</div>
)};

export default CartIcon;




// import React from 'react';
// import { connect } from 'react-redux';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// import './cart-icon.styles.scss';


// const CartIcon = ({toggleCartHidden}) => (
// <div className='cart-icon' onClick={toggleCartHidden}>
// <ShoppingIcon className='shopping-icon' />
// <span className='item-count'>0</span> 

// </div>
// );

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// matchStateToProps = ({cart: {cartItems}}) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) =>accumulatedQuantity +cartItem.quantity, 0
//     )
// });


// export default connect(null, mapDispatchToProps)(CartIcon);

