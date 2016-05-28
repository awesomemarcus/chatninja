import React from 'react';
import {mount} from 'react-mounter';


import AuthChecker from '../users/containers/auth_checker';
import MainLayout from '../core/components/main_layout';
import CategoriesAdd from './containers/categories_add';
import CategoriesUpdate from './containers/categories_update';
import CategoriesView from './containers/categories_view';
import CategoriesDelete  from './containers/categories_delete';
import CategoriesList from './containers/categories_list';


export default function (injectDeps, {FlowRouter}) {
//  const MainLayoutCtx = injectDeps(MainLayout);
  const AuthCheck = injectDeps(AuthChecker);

  FlowRouter.route('/categories/add', {
    name: 'categories_add',
    action() {
      mount(AuthCheck, {
        MainLayout,content: () => (<CategoriesAdd />),
      });
    },
  });

  FlowRouter.route('/categories/update/:category_id', {
    name: 'categories_update',
    action({category_id}) {
      mount(AuthCheck, {
        MainLayout,content: () => (<CategoriesUpdate category_id={category_id} />),
      });
    },
  });

  FlowRouter.route('/categories/view/:category_id', {
    name: 'categories_view',
    action({category_id}) {
      mount(AuthCheck, {
        MainLayout,content: () => (<CategoriesView category_id={category_id} />),
      });
    },
  });

  FlowRouter.route('/categories/delete/:category_id', {
    name: 'categories_delete',
    action({category_id}) {
      mount(AuthCheck, {
        MainLayout,content: () => (<CategoriesDelete category_id={category_id} />),
      });
    },
  });

  FlowRouter.route('/categories/list', {
    name: 'categories_list',
    action() {
      mount(AuthCheck, {
        MainLayout,content: () => (<CategoriesList />),
      });
    },
  });


}
