import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import MessagesSend from './containers/messages_send';
import MessagesBox from './containers/messages_box';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/test/message/send', {
    name: 'messages.send',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesSend />),
      });
    },
  });

  FlowRouter.route('/test/message/box', {
    name: 'messages.box',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesBox recepientId="kX7SyDdqZh3rEswWu" />),
      });
    },
  });
}
