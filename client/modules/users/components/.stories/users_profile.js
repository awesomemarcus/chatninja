import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UsersProfile from '../users_profile.jsx';

storiesOf('Users Profile', module)
  .add('Current user (Shows edit button)', () => {
    const userObject = {
      _id: "kjhEDFGKJouhjgGfM",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    const routeParamsUserId = "kjhEDFGKJouhjgGfM";

    return (
      <UsersProfile user={userObject} profileId={routeParamsUserId} />
    );
  })
  .add('Not current user (Shows block button)', () => {
    const userObject = {
      _id: "kjhEDFGKJouhjgGfM",
      profile: {
        username: "johnyCash",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: "25"
      }
    };

    const routeParamsUserId = "kjhEDFGKJosduhjgGfM";

    return (
      <UsersProfile user={userObject} profileId={routeParamsUserId} />
    );
  });
