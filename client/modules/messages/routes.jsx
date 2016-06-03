import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import MessagesLayout from './components/messages_layout';
import AuthChecker from '../users/containers/auth_checker';


export default function (injectDeps, {FlowRouter}) {
  const AuthCheckerCtx = injectDeps(AuthChecker);
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/inbox/:_id', {
    name: 'inbox',
    action(params) {
      mount(AuthCheckerCtx, {
        content: () => (<MessagesLayout recipientId={params._id}/>),
        MainLayout: MainLayoutCtx,
      });
    },
  });
}
