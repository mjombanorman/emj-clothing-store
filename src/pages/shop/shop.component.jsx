
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
  <CollectionsOverview/>
  </div>
);


export default ShopPage;