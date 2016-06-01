import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/main_layout';
import MessagesSend from './containers/messages_send';
<<<<<<< HEAD
import MessagesBox from './containers/messages_box';
=======
import MessagesLayout from './components/messages_layout';
>>>>>>> 3c74c0f84f0e2e7d56be1f8983ec3e328d059c58

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

<<<<<<< HEAD
  FlowRouter.route('/test/message/box', {
    name: 'messages.box',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesBox recepientId="kX7SyDdqZh3rEswWu" />),
=======
  FlowRouter.route('/inbox', {
    name: 'inbox',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MessagesLayout />),
>>>>>>> 3c74c0f84f0e2e7d56be1f8983ec3e328d059c58
      });
    },
  });
}
