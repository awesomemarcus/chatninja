import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UsersItem from '../users_item.jsx';

storiesOf('Users Item', module)
  .add('Active User', () => {
    const userObject = {
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
        lastActivity: '2 mins ago',
      }
    };

    return (
      <UsersItem user={userObject} />
    );
  })
  .add('Idle User', () => {
    const userObject = {
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
        idle: true,
        offline: false,
        lastActivity: '2 mins ago',
      }
    };

    return (
      <UsersItem user={userObject} />
    );
  })
  .add('Offline User', () => {
    const userObject = {
      _id: "kjhEDFGKJouhjgGfM",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      },
      status: {
        online: false,
        idle: false,
        offline: true,
        lastActivity: '2 mins ago',
      }
    };

    return (
      <UsersItem user={userObject} />
    );
  });
