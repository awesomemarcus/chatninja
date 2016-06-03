import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import NavBar from '../components/nav_bar';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('getUserMessages', Meteor.userId()).ready()){

   const getNotifCount = Collections.Messages.find({toUser: Meteor.userId(), read: false}).count();
   onData(null, {getNotifCount});
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NavBar);
