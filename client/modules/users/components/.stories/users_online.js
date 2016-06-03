import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UsersOnline from '../users_online.jsx';

storiesOf('Online Users List', module)
  .add('Online User', () => {
    const userObject = [{
      _id: "kjhEDFGKJouhjgttr",
      profile: {
        username: "marcusAwesome",
        firstname: "Marcus",
        lastname: "Backend",
        gender: "male",
        age: "25"
      },
      status: {
        online: true,
        idle: false,
        offline: false,
      }
    }];
    const messages = [
      {
        fromUser: "not user",
        message: 'I typed this message. :) :skull:',
        read: false,
      },
      {
        fromUser: "not user",
        message: 'I typed this message. :) :skull:',
        read: false,
      },
    ];

    return (
      <UsersOnline onlineUsers={userObject} userMessages={messages} />
    );
  })
  .add('Online User with Notifications', () => {
    const userObject = [{
      _id: "kjhEDFGKJouhjgGfM",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      },
      status: {
        online: true,
        idle: false,
        offline: false,
      }
    }];
    const messages = [
      {
        fromUser: "kjhEDFGKJouhjgGfM",
        message: 'I typed this message. :) :skull:',
        read: false,
      },
      {
        fromUser: "kjhEDFGKJouhjgGfM",
        message: 'I typed this message. :) :skull:',
        read: false,
      },
    ];

    return (
      <UsersOnline onlineUsers={userObject} userMessages={messages} />
    );
  });
