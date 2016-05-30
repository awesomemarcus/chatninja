import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {UserStatus} from 'meteor/mizzao:user-status';
import {FS} from 'meteor/cfs:base-package';

Tracker.autorun(function(){
 if (Meteor.userId()){
  try {
   UserStatus.startMonitor({
    threshold: 600000,
    interval: 5000,
    idleOnBlur: true,
   });
  } catch(err) {
   throw new Meteor.error(err);
  }
 }

});

const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();

  const userId = Meteor.userId() ? Meteor.userId() : null;
  const user = Meteor.user();

  return {
    userSubReady,
    userId,
    user,
  };

};


export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    authCommon,
    FS,
  };
}
