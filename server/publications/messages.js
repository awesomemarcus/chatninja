import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('getMessagedUsers', function (userId) {
   check(userId, String);

    return Messages.aggregate([{$sort:{createdAt: -1}}, {$match: {$or: [{fromUser: userId},{toUser:userId}]}}, {$group: {_id:"$fromUser", fromUser:{$first:"$fromUser"}, toUser:{$first:"$toUser"}, message:{$first:"$message"}}}]);
  });

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

  // Meteor.publish('userUnreadMessages', function(userId){
  //  check(userId, String);
  //  var self = this;
  //
  //  // return Messages.find({$and:[{toUser: userId}, {read: false}]});
  //
  //  var handle = Messages.aggregate([{$match: {$and:[{toUser: userId}, {read: false}]}},{$group: {_id:"$fromUser", total: {$sum: 1}}}]).forEach(function(user){
  //   self.added('userUnreadMessages',user._id, {
  //    total: user.total,
  //   });
  //  });
  //
  //  self.ready();
  //
  //
  //
  //
  // })
}
