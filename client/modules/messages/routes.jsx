import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import MessagesLayout from './components/messages_layout';
import AuthChecker from '../users/containers/auth_checker';


export default function (injectDeps, {FlowRouter}) {
  const AuthCheckerCtx = injectDeps(AuthChecker);
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/inbox', {
    name: 'inbox',
    action() {
      mount(AuthCheckerCtx, {
        content: () => (<MessagesLayout />),
        MainLayout: MainLayoutCtx,
      });
    },
  });
}
