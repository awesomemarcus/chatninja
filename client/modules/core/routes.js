import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout';
import AuthChecker from '../users/containers/auth_checker';
import UsersList from '../users/containers/users_list.js';

export default function (injectDeps, {FlowRouter}) {
 const AuthCheckerCtx = injectDeps(AuthChecker);
 const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(AuthCheckerCtx, {
        content: () => (<UsersList />),
        MainLayout: MainLayoutCtx,
      });
    },
  });
}
