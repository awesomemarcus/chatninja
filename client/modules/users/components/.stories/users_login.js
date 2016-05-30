import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UsersLogin from '../users_login';

storiesOf('Users Login', module)
  .add('Login Form', () => {
    const error = null;
    return (
      <UsersLogin userLogin={action('userLogin')} error={error}/>
    );
  })
  .add('With error on login', () => {
    const error = 'Error on login';
    return (
      <UsersLogin userLogin={action('userLogin')} error={error}/>
    );
  });
