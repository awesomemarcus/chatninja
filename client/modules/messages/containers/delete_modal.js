import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DeleteModal from '../components/delete_modal.jsx';

export const composer = ({context}, onData) => {

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  deleteMessage: actions.messages.messagesDelete,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DeleteModal);
