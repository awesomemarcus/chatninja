import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsUpdate from '../products_update';

const categories = [
  {_id: '1', name: 'Food'},
  {_id: '2', name: 'Business'},
  {_id: '3', name: 'Health'},
  {_id: '4', name: 'Technology'},
  {_id: '5', name: 'Ewan'},
];

const product = {
  _id: '1',
  category_id: '1',
  name: 'product 1',
  description: 'the quick brown fox jumps over the lazy dog',
  price: 10.50
};

storiesOf('Products Update', module)
  .add('default view', () => (
    <ProductsUpdate updateProduct={action('update product')} categories={categories} product={product}/>
)).add('name required error', () => (
    <ProductsUpdate nameError="Name is required." updateProduct={action('update product')} categories={categories} product={product}/>
)).add('name min/max error', () => (
    <ProductsUpdate nameError="Name must contain 3-20 characters." updateProduct={action('update product')} categories={categories} product={product}/>
)).add('description required error', () => (
    <ProductsUpdate descriptionError="Description is required." updateProduct={action('update product')} categories={categories} product={product}/>
)).add('description min/max error', () => (
    <ProductsUpdate descriptionError="Description must contain 20-150 characters." updateProduct={action('update product')} categories={categories} product={product}/>
)).add('price required error', () => (
    <ProductsUpdate priceError="Price is required." updateProduct={action('update product')} categories={categories} product={product}/>
));
