import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsView from '../products_view';

const product = {
  _id: '1',
  category_id: '1',
  name: 'product 1',
  description: 'the quick brown fox jumps over the lazy dog',
  price: 10.50
};

storiesOf('Products View', module)
  .add('default view', () => (
    <ProductsView product={product}/>
));
