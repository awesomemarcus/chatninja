import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesBox from '../components/messages_send';

export const composer = ({context, recepientId}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('getMessages', Meteor.userId(), recepientId).ready()){
   const messages = Collections.Messages.find({}, {sort:{createdAt: -1}}).fetch();
   console.log(messages);

   onData(null, {messages});

  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesBox);
