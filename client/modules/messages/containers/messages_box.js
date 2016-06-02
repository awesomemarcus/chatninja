import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesBox from '../components/messages_box';

export const composer = ({context, recipientId}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('getMessages', Meteor.userId(), recipientId).ready()){
   const messages = Collections.Messages.find({}, {sort:{createdAt: 1}}).fetch();
   const myId = Meteor.userId();
   onData(null, {messages, myId});

  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesBox);
