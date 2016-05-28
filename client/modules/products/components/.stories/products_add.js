import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import ProductsAdd from '../products_add.jsx';

const categories = [
  {_id: '1', name: 'Food'},
  {_id: '2', name: 'Business'},
  {_id: '3', name: 'Health'},
  {_id: '4', name: 'Technology'},
  {_id: '5', name: 'Ewan'},
];

storiesOf('Products Add', module)
  .add('default view', () => (
    <ProductsAdd add={action('add product')} categories={categories}/>
)).add('name required error', () => (
  <ProductsAdd nameError="Name is required." add={action('add product')} categories={categories}/>
)).add('name min/max error', () => (
  <ProductsAdd nameError="Name must contain 3-20 characters." add={action('add product')} categories={categories}/>
)).add('description required error', () => (
  <ProductsAdd descriptionError="Description is required." add={action('add product')} categories={categories}/>
)).add('description min/max error', () => (
  <ProductsAdd descriptionError="Description must contain 20-150 characters." add={action('add product')} categories={categories}/>
)).add('price required error', () => (
  <ProductsAdd priceError="Price is required."/>
));
