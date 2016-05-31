import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersList from '../components/users_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  if(Meteor.subscribe('allUsers', Meteor.userId).ready()){
   const users = Meteor.users.find({_id:{$ne:Meteor.userId()}},{sort: {'status.online': -1, 'profile.username': 1}}).fetch();

   onData(null, {users});
  }



};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersList);
