import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesSend from '../components/messages_send.jsx';

export const composer = ({context}, onData) => {

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  sendMessage: actions.messages.sendMessage,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesSend);
