import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import CategoriesUpdate from '../categories_update';

const category = {
  _id: '1',
  name: 'category 1',
  createdAt: new Date('2016-5-20'),
};

storiesOf('Categories Update', module)
    .add('default view', () => (
      <CategoriesUpdate category={category} categoriesUpdate={action('categories update')}/>
    ))
    .add('name required error', () => (
      <CategoriesUpdate category={category} categoriesUpdate={action('categories update')} nameError="Category name is required."/>
    )).add('name min/max error', () => (
      <CategoriesUpdate category={category} categoriesUpdate={action('categories update')} nameError="Category name must contain 3-20 characters."/>
    )).add('name alpahumeric error', () => (
      <CategoriesUpdate category={category} categoriesUpdate={action('categories update')} nameError="Category name must contain alphanumeric characters only."/>
    ));
