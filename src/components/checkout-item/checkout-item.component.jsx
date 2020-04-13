import React from "react";
import './checkout-item.styles.scss';
import {addItem, clearItem, removeItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({item, addItem, removeItem, clearItem}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt='item'/>
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
            <span className="value">{item.quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className="price">{item.price}</span>
        <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);