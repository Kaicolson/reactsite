import React from "react";
import { useSelector } from "react-redux";
import { selectShopCollectionsPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const shopCollections = useSelector(selectShopCollectionsPreview);

  return (
    <div className="collections-overview">
      {shopCollections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
