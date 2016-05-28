import React from 'react';
import {mount} from 'react-mounter';

import AuthChecker from '../users/containers/auth_checker';
import MainLayout from '../core/components/main_layout';
import ProductsAdd from './containers/products_add';
import ProductsUpdate from './containers/products_update';
import ProductsView from './containers/products_view';
import ProductsList from './containers/products_list';

export default function (injectDeps, {FlowRouter}) {
  //const MainLayoutCtx = injectDeps(MainLayout);
  const AuthCheck = injectDeps(AuthChecker);


  FlowRouter.route('/products/add', {
    name: 'products_add',
    action() {
      mount(AuthCheck, {
        MainLayout,  content: () => (<ProductsAdd />),
      });
    },
  });

  FlowRouter.route('/products/update/:productId', {
    name: 'products_update',
    action({productId}) {
      mount(AuthCheck, {
      MainLayout,  content: () => (<ProductsUpdate productId={productId}/>),
      });
    },
  });

  FlowRouter.route('/products/view/:productId', {
    name: 'products_view',
    action({productId}) {
      mount(AuthCheck, {
        MainLayout,  content: () => (<ProductsView productId={productId}/>),
      });
    },
  });

  FlowRouter.route('/products/list', {
    name: 'products_list',
    action() {
      mount(AuthCheck, {
        MainLayout,  content: () => (<ProductsList />),
      });
    },
  });


}
