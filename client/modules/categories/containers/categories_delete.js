import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesDelete from '../components/categories_delete';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesDelete);
