import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ProductsList from '../components/products_list';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('productList').ready()){
    const prods = Collections.Products.find({deleted:null},{sort:{createdAt:-1}}).fetch().map(function(product){

      product.category = Collections.Categories.findOne({_id: product.category_id}, {fields: {name:1}});

      return product;
    });

    onData(null, {prods});

  }
};

export const depsMapper = (context, actions) => ({
  deleteProduct: actions.products.deleteProduct,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);
