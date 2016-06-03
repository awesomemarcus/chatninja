import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersOnline from '../components/users_online.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

   const onlineUsers = Meteor.users.find({_id:{$ne:Meteor.userId()},"status.online": true}, {sort: {"pofile.username": 1}}).fetch();
   const unreadMessageUsers = Collections.Messages.find({read: false});
   onData(null, {onlineUsers, unreadMessageUsers});

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersOnline);
