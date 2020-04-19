import React from "react";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);