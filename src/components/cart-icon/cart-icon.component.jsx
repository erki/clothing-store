import React from "react";
import {connect} from "react-redux";
import {Styled} from "./cart-icon.styles";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <Styled.CartIcon onClick={toggleCartHidden}>
        <Styled.ShoppingIcon className='shopping-icon'/>
        <Styled.IconCount>{itemCount}</Styled.IconCount>
    </Styled.CartIcon>
);


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);