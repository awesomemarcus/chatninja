import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesLayout from '../components/messages_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('getUserMessages', Meteor.userId()).ready()){

   const userMessages = Collections.Messages.find({}, {sort: {createdAt: -1}}).fetch();
   
   onData(null, {userMessages});

  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesLayout);
