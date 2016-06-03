import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagedUsers from '../components/messaged_users.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

   Meteor.call("getMessagedUsers", Meteor.userId(), (err, result) => {
    if(!err){
     onData(null, {result});
    }
   })




};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagedUsers);
