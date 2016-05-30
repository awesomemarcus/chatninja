import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsList from '../products_list';

const products = [
  {_id: '1', category_id: '1', name: 'product 1',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-4-12')},
  {_id: '2', category_id: '3', name: 'product 2',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-5-12')},
  {_id: '3', category_id: '2', name: 'product 3',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-3-15')},
  {_id: '4', category_id: '5', name: 'product 4',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-2-23')},
  {_id: '5', category_id: '1', name: 'product 5',
    description: 'the quick brown fox jumps over the lazy dog.',
    price: 15.50, createdAt: new Date('2016-4-12')},
];

const categories = [
  {_id: '1', name: 'Food'},
  {_id: '2', name: 'Business'},
  {_id: '3', name: 'Health'},
  {_id: '4', name: 'Technology'},
  {_id: '5', name: 'Ewan'},
];

storiesOf('Products List', module)
  .add('default view', () => (
    <ProductsList
        products={products}
        deleteProduct={action('delete product')}
        categories={categories}
    />
  ));
