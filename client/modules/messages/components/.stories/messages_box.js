import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MessagesBox from '../messages_box';

storiesOf('Messages Box', module)
  .add('My sent message', () => {
    const messages = [
      {
        fromUser: "default",
        message: 'I typed this message. :) :skull:'
      },
      {
        fromUser: "default",
        message: 'I typed this message. :) :skull:'
      },
    ];

    return (
      <MessagesBox messages={messages} myId="default" />
    );
  })
  .add('Message from other user', () => {
    const messages = [
      {
        fromUser: "notuser",
        message: 'This message is from the other user. :headphones:'
      },
      {
        fromUser: "default",
        message: 'I typed this message. :) :skull:'
      },
    ];

    return (
      <MessagesBox messages={messages} myId="default" />
    );
  });
