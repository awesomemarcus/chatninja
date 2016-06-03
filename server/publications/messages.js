import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('getUserMessages', function(currentUserId){
   check(currentUserId, String);

   return Messages.find({$and:[
    {$or:[{fromUser: currentUserId},{toUser:currentUserId}]},{deleted: {$nin: [currentUserId]}},
   ]});

  });


  Meteor.publish('messagesUnread', function(currentUserId){
   check(currentUserId, String);

   return Messages.find({toUser: currentUserId, read: false},{fields: {fromUser: 1, read: 1}});

  })

}
