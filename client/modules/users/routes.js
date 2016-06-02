import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout';
import UsersLogin from './containers/users_login';
import UsersSignup from './containers/users_signup';
import AuthChecker from './containers/auth_checker';
import UsersProfile from './containers/users_profile';
import UsersUpdate from './containers/users_update';

export default function (injectDeps, {FlowRouter,Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const AuthCheckerCtx = injectDeps(AuthChecker);

  FlowRouter.route('/users/login', {
    name: 'login',
    action() {
        if(Meteor.userId()){
          FlowRouter.go("/");
        }
      mount(MainLayoutCtx, {
        content: () => (<UsersLogin />),
      });
    },
  });

  FlowRouter.route('/users/signup', {
    name: 'signup',
    action() {
      if(Meteor.userId()){
        FlowRouter.go("/");
      }
      mount(MainLayoutCtx, {
        content: () => (<UsersSignup />),
      });
    },
  });

  FlowRouter.route('/users/logout', {
   name: 'logout',
   action() {
    Meteor.logout();
   },
  });

  FlowRouter.route('/users/profile/:profileId', {
   name: 'users.profile',
   action(params){
    mount(AuthCheckerCtx, {
     content: () => (<UsersProfile profileId={params.profileId}/>),
     MainLayout: MainLayoutCtx,
    })
  },
  })

  FlowRouter.route('/users/update/', {
   name: 'users.profile',
   action(){
    mount(AuthCheckerCtx, {
     content: () => (<UsersUpdate />),
     MainLayout: MainLayoutCtx,
    })
  },
  })

}
