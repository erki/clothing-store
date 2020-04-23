import React from "react";
import {Styled} from "./collections-overview.styles";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
    <Styled.CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) =>
                <CollectionPreview key={id} {...otherCollectionProps}/>
            )
        }
    </Styled.CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);