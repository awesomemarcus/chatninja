import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesBox from '../components/messages_box';

export const composer = ({context, recipientId}, onData) => {
  const {Collections} = context();

   const messages = Collections.Messages.find({$or:[{fromUser: recipientId}, {toUser: recipientId}]}, {sort: {createdAt: 1}}).fetch();


   const myId = Meteor.userId();

   onData(null, {messages, recipientId, myId});

};

export const depsMapper = (context, actions) => ({
  markRead: actions.messages.markRead,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesBox);
