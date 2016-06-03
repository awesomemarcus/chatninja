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
        age: "25",
        avatar: "/avatar.png"
      },
      status: {
        online: true,
        idle: false,
        offline: false,
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
        age: "25",
        avatar: "/avatar.png"
      },
      status: {
        online: true,
        idle: true,
        offline: false,
        lastActivity: "2016-06-02T07:08:46.737Z",
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
        age: "25",
        avatar: "/avatar.png"
      },
      status: {
        online: false,
        idle: false,
        offline: true,
      }
    };

    return (
      <UsersItem user={userObject} />
    );
  });
