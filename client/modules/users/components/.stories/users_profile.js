import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UsersProfile from '../users_profile';

storiesOf('Users Profile', module)
  .add('User Profile', () => {
    const userObject = {
      _id: "1",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25",
        avatar: "/avatar.png"
      }
    };

    const routeParamsUserId = "1";

    return (
      <UsersProfile user={userObject} profile={userObject} profileId={routeParamsUserId} />
    );
  });
