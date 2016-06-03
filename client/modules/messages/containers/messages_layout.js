import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesLayout from '../components/messages_layout.jsx';

export const composer = ({context, recipientId}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('getUserMessages', Meteor.userId()).ready()){

   const userMessages = Collections.Messages.find({}, {sort: {createdAt: -1}}).fetch();

   if(Meteor.subscribe('allUsers').ready()){
    const recipient = Meteor.users.findOne({_id:recipientId});
    onData(null, {userMessages, recipient});
   }


  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesLayout);
