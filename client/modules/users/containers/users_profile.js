import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersProfile from '../components/users_profile';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersProfile);
