import React, { useRef } from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {

    const ShopData = useRef(SHOP_DATA);

   return (
       
<div className='shop-page'>
    {
        ShopData.current.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key ={id} {...otherCollectionProps} />
        )
           )

    }
     
</div> );

}

export default ShopPage;