import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.current', function () {
    return Meteor.users.find(this.userId);
  });

  Meteor.publish('allUsers', function(){

   return Meteor.users.find({}, {fields: {emails: 1, profile: 1, status: 1}});
  });
}
