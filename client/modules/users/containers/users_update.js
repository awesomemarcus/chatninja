import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UsersUpdate from '../components/users_update';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersUpdate);
