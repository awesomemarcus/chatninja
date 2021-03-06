import {MessageSchem} from '/lib/collections/messages';

export default {
  messageSend({Meteor}, fromId, toId, message){

   const messageData =
    {
     message: message,
     fromUser: fromId,
     toUser: toId,
     read: false,
     deleted: [],
     createdAt: new Date(),
    }

   Meteor.call('messagesSend', messageData);
  },
  validateMessage({LocalState}, message){
   let messageData = {
    message: message,
   }

   const Checker = MessageSchem.namedContext("myContext");
   const validateMessage = Checker.validateOne(messageData, "message");

   if(validateMessage === false){
    LocalState.set("MESSAGE_ERROR", Checker.keyErrorMessage("message"));
   }
  },

  markRead({Meteor}, senderId){

   Meteor.call('messagesMarkRead', Meteor.userId(), senderId);

  },

  clearErrors({LocalState}){
   LocalState.set('MESSAGE_ERROR', null);
  },

  messagesDelete({Meteor}, idToDelete){
   Meteor.call('deleteMessage', idToDelete, Meteor.userId());
  },


}
