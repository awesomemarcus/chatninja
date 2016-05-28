import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesView from '../components/categories_view';

export const composer = ({context, category_id}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe("categoriesSingle", category_id).ready()){
    const category = Collections.Categories.findOne(category_id);
    onData(null, {category});
  }

  return;

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesView);
