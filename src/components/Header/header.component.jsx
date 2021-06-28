import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { signOutStart } from '../redux/user/user.actions';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
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
                (<OptionsLink as='div' onClick={signOutStart}>SIGN OUT</OptionsLink>)
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapToStateProps, mapDispatchToProps)(Header);