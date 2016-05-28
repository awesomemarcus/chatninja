import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.current', function () {
    return Meteor.users.find(this.userId);
  });
}
