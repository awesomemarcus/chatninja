import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UsersSignup from '../users_signup';

const getAgeOptions = ()=> {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
}

storiesOf('Users Signup', module)
  .add('Signup form', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on result', () => {
    const errorField = {
      error: 'Error from method call',
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on email', () => {
    const errorField = {
      error: null,
      email: 'Invalid Email',
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on password', () => {
    const errorField = {
      error: null,
      email: null,
      password: 'Invalid Password',
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on username', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      username: 'Invalid Username',
      firstname: null,
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on firstname', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      username: null,
      firstname: 'Invalid Firstname',
      lastname: null,
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on lastname', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: 'Invalid Lastname',
      gender: null,
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on gender', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: 'Invalid Gender',
      age: null
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on age', () => {
    const errorField = {
      error: null,
      email: null,
      password: null,
      username: null,
      firstname: null,
      lastname: null,
      gender: null,
      age: 'Invalid Age'
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  })
  .add('With error on all fields', () => {
    const errorField = {
      error: null,
      email: 'Invalid Email',
      password: 'Invalid Password',
      username: 'Invalid Username',
      firstname: 'Invalid Firstname',
      lastname: 'Invalid Lastname',
      gender: 'Invalid Gender',
      age: 'Invalid Age'
    };

    return (
      <UsersSignup userCreateAccount={action('userCreateAccount')} getAgeOptions={getAgeOptions} errorField={errorField} />
    );
  });
