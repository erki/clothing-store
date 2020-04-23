import React from "react";
import {Styled} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <Styled.CartItem>
        <img src={imageUrl} alt="item"/>
        <Styled.ItemDetails>
            <Styled.ItemName>{name}</Styled.ItemName>
            <span className="price">{quantity} x ${price}</span>
        </Styled.ItemDetails>
    </Styled.CartItem>
);

export default CartItem;