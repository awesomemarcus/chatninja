import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Signup from '../components/users_signup';

export const composer = ({context,clearErrors}, onData) => {
  const {LocalState} = context();

  const errorField = {
    "username" :   LocalState.get("profile.username",null),
    "firstname" :   LocalState.get("profile.firstname",null),
    "lastname" :   LocalState.get("profile.lastname",null),
    "email" :   LocalState.get("emails.$.address",null),
    "password" :   LocalState.get("password",null),
    "age" :   LocalState.get("profile.age",null),
    "gender" :   LocalState.get("profile.gender",null) ,
    "error" :  LocalState.get("main_error"),
  };

  onData(null, {errorField});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  userSignup:actions.users.userSignup,
  clearErrors:actions.users.clearErrors,
  validateInputField:actions.users.validateInputField,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);
