import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import MessagesSend from './containers/messages_send';
import MessagesLayout from './components/messages_layout';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/messages/send', {
    name: 'messages.send',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesSend />),
      });
    },
  });

  FlowRouter.route('/inbox', {
    name: 'inbox',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesLayout />),
      });
    },
  });
}
