import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>
                SHOP
            </OptionsLink>
            <OptionsLink to='/shop'>
                CONTACT
            </OptionsLink>
            {
                currentUser ?
                (<OptionsLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionsLink>)
                :
                (<OptionsLink to='/signin'>SIGN IN</OptionsLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }

    </HeaderContainer>
)

const mapToStateProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapToStateProps)(Header);