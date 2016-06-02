import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersProfile from '../components/users_profile';

export const composer = ({context}, onData) => {
 const {Meteor} = context();

 if(Meteor.subscribe('users.current').ready()){

  const user = Meteor.users.findOne();


  onData(null, {user});

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
