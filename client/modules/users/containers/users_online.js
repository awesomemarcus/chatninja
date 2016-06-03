import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersOnline from '../components/users_online.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  if(Meteor.subscribe('allUsers').ready()){
   const onlineUsers = Meteor.users.find({_id:{$ne:Meteor.userId()},"status.online": true}).fetch();

   onData(null, {onlineUsers});

  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersOnline);
