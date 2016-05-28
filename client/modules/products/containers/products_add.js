import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsAdd from '../components/products_add';

export const composer = ({context}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');
  const descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');
  const priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');
  // const addError = LocalState.get('PRODUCTS_ADD_ERROR');

  if(Meteor.subscribe('categoriesList').ready()){
    const categories = Collections.Categories.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {categories, nameError, descriptionError, priceError});
  }
    return;
};

export const depsMapper = (context, actions) => ({
  add: actions.products.add,
  validateProdName: actions.products.validateProdName,
  validateProdDescription: actions.products.validateProdDescription,
  validateProdPrice: actions.products.validateProdPrice,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsAdd);
