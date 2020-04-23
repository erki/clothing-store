import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {Styled} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <Styled.CartDropDown>
        <Styled.CartItems>
            {
                cartItems.length > 0 ?
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <Styled.EmptyMessage>Your cart is empty</Styled.EmptyMessage>
            }
        </Styled.CartItems>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}> GO TO CHECKOUT</CustomButton>
    </Styled.CartDropDown>
);

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems});

//Reihenfolge der Methodenaufrufe ist entscheidend. withRouter muss ganz außen sein
export default withRouter(connect(mapStateToProps)(CartDropdown));