import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesSend from '../components/messages_send.jsx';

export const composer = ({context}, onData) => {

 const {Meteor, LocalState, Collections} = context();

 const errorFields = {
  message: LocalState.get('message-error', null),
 }

 onData(null, {errorFields});
};

export const depsMapper = (context, actions) => ({
  messageSend: actions.messages.messageSend,
  validateMessage: actions.messages.validateMessage,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesSend);
