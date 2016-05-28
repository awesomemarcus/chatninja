import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesList from '../components/categories_list';

export const composer = ({context}, onData) => {

  const {Meteor, Collections} = context();

  if(Meteor.subscribe('categoriesList').ready()){

    const categories = Collections.Categories.find({}).fetch().map(function(category){


      category.productCount = Collections.Products.find({category_id: category._id}).count();

      return category;

    });

    onData(null, {
      categories,
    });

  }

};

export const depsMapper = (context, actions) => ({
  categoriesDelete: actions.categories.categoriesDelete,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesList);
