import React from "react";
import {Styled} from "./checkout-item.styles";
import {addItem, clearItem, removeItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({item, addItem, removeItem, clearItem}) => (
    <Styled.CheckoutItem>
        <Styled.ImageContainer>
            <img src={item.imageUrl} alt='item'/>
        </Styled.ImageContainer>
        <Styled.Text>{item.name}</Styled.Text>
        <Styled.Quantity>
            <div onClick={() => removeItem(item)}>&#10094;</div>
            <span>{item.quantity}</span>
            <div onClick={() => addItem(item)}>&#10095;</div>
        </Styled.Quantity>
        <Styled.Text>{item.price}</Styled.Text>
        <Styled.RemoveButton onClick={() => clearItem(item)}>&#10005;</Styled.RemoveButton>
    </Styled.CheckoutItem>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);