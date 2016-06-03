import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersList from '../components/users_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState} = context();
  const filter = (LocalState.get('filter')) ? LocalState.get('filter') : {};

  if(Meteor.subscribe('allUsers').ready()){
   const users = Meteor.users.find({$and:[
    {_id:{$ne:Meteor.userId()}},
    filter,
   ]},{sort: {'status.online': -1, 'profile.username': 1}}).fetch();

   onData(null, {users});
  }



};

export const depsMapper = (context, actions) => ({
  queryFilter: actions.users.filterQuery,
  clearFilter: actions.users.clearFilter,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersList);
