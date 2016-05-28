import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsUpdate from '../components/products_update';

export const composer = ({context, productId}, onData) => {
  const {Meteor, Collections} = context();
  // const nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');
  // const descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');
  // const priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');
  if(Meteor.subscribe('productList').ready()){
    const product = Collections.Products.findOne({_id: productId},{sort:{createdAt:-1}});
    const categories = Collections.Products.find({},{sort:{createdAt:-1}}).fetch();
        onData(null, {product, categories});
  }
};

export const depsMapper = (context, actions) => ({
  updateProduct: actions.products.updateProduct,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsUpdate);
