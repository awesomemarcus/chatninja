import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import MessagesLayout from './components/messages_layout';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/inbox', {
    name: 'inbox',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesLayout />),
      });
    },
  });
}
