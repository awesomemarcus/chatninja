import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('getMessagedUsers', function (userId, messageId) {
   check(userId, String);
   check(messageId, String);

    return Messages.aggregate([{sort:{createdAt: -1}}, {$match: {messageId: {$regex: userId}}},{$group: {_id:"$fromUser", message:{$first: "$message"}, createdAt: {$first: "$createdat"}}}]);
  });

  Meteor.publish('getMessages', function(currentUserId, otherUserId){
   check(currentUserId, String);
   check(otherUserId, String);

   return Messages.find({$and:[
    {$or: [{$and: [{fromUser: currentUserId}, {toUser: otherUserId}]}, {$and: [{fromUser: otherUserId}, {toUser: currentUserId}]}]},
    {deleted: {$nin: [currentUserId]}},
   ]});

  });

  Meteor.publish('deleteMessages', function(messageId){
   check(messageId, String);

  })
}
