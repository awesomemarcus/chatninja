import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import CategoriesList from '../categories_list.jsx';

const categories = [
  {
    _id: '1',
    name: 'category 1',
    createdAt: new Date('2016-1-30')
  },
  {
    _id: '2',
    name: 'category 2',
    createdAt: new Date('2016-4-25')
  },
  {
    _id: '3',
    name: 'category 3',
    createdAt: new Date('2016-3-12')
  },
];

storiesOf('Categories List', module)
    .add('default view', () => (
      <CategoriesList categories={categories} categoriesDelete={action('categories delete')}/>
    ));
