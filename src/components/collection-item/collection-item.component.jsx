import React from "react";
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {Styled} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
    return (
        <Styled.CollectionItem>
            <Styled.Image style={{backgroundImage: `url(${item.imageUrl})`}}/>
            <Styled.CollectionItemFooter>
                <Styled.Name>{item.name}</Styled.Name>
                <Styled.Price>{item.price}</Styled.Price>
            </Styled.CollectionItemFooter>
            <Styled.AddToCartButton onClick={() => addItem(item)} inverted>Add to Cart</Styled.AddToCartButton>
        </Styled.CollectionItem>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);