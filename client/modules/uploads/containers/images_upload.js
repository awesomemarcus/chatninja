import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ImagesUpload from '../components/images_upload.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  uploadImage: actions.uploads.Upload,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ImagesUpload);
