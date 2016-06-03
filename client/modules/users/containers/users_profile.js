import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersProfile from '../components/users_profile';

export const composer = ({context, profileId}, onData) => {
 const {Meteor} = context();

 if(Meteor.subscribe('users.current').ready()){

  const user = Meteor.users.findOne(Meteor.userId);
  const profile = Meteor.users.findOne({_id: profileId});
  onData(null, {user, profile});

 }
};

export const depsMapper = (context, actions) => ({
  userUpdatePhoto:actions.users.userUpdatePhoto,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersProfile);
