import React from "react";
import {Styled} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
    <Styled.CollectionPreview>
        <Styled.Title>{title.toUpperCase()}</Styled.Title>
        <Styled.Preview>
            {
                items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </Styled.Preview>
    </Styled.CollectionPreview>
)

export default CollectionPreview;