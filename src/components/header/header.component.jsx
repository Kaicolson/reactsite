import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { createStructuredSelector } from "reselect";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  //   const selectedStates = createStructuredSelector({
  //     currentUser: cuUser,
  //     hidden: chidden,
  //   });

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;

// import React from 'react';
// import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import './header.styles.scss';
// import {ReactComponent as Logo} from '../../assets/crown.svg';
// import {auth} from '../../firebase/firebase.utils';
// import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// const Header = ({currentUser, hidden}) => (

// <div className='header'>
//     <Link className='logo-container' to='/'>

// <Logo className='logo' />
// </Link>
// <div className='options'>
// <Link className='option' to='/shop'>SHOP</Link>
// <Link className='option' to='/shop'>CONTACT</Link>
// {
//     currentUser ?
//     <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
//     :
//     <Link className='option' to='/signin'>SIGN IN</Link>
// }
// <CartIcon />
// </div>
// {hidden ? null :
// <CartDropdown />}

// </div>

// );

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// });

// export default connect(mapStateToProps)(Header);
