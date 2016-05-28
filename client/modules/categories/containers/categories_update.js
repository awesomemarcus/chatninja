import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesUpdate from '../components/categories_update';

export const composer = ({context, category_id}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe("categoriesSingle", category_id).ready()){
    const category = Collections.Categories.findOne(category_id);
    onData(null, {category});
  }

};

export const depsMapper = (context, actions) => ({
  categoriesUpdate:actions.categories.categoriesUpdate,
  clearErrors: actions.categories.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesUpdate);
