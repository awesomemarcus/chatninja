import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'messagesSend'(messageData) {
     check(messageData, Object);

     Messages.insert(messageData);

    },

    'deleteMessage'(messageId, userId){
     check(messageId, String);
     check(userId, String);


     Messages.update({_id:messageId}, {$addToSet: {deleted: userId}});

    },

    'messagesMarkRead'(currentUserId, senderId){
     check(currentUserId, String);
     check(senderId, String);

     Messages.update({fromUser: senderId,toUser: currentUserId}, {$set: {read: true}},{multi: true});

    },
  });
}
