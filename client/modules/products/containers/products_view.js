import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsView from '../components/products_view';

export const composer = ({context, productId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('productList').ready()){
    const product = Collections.Products.findOne({},{sort:{createdAt:-1}});
        onData(null, {product});
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsView);
