import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MessagesBox from '../messages_box.jsx';

storiesOf('Message Box', module)
  .add('Message', () => {
    const msg = {
      from: 'Hi there!',
      to: 'Who are you?'
    };

    return (
      <MessagesBox msg={msg} />
    );
  });
