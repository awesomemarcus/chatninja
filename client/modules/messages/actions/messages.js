import {MessageSchem} from '/lib/collections/messages';

export default {
  messageSend({Meteor}, senderId, receiverId, message, fromUser){

   const messageDataArray = [
    {
     messageId: senderId,
     message: message,
     fromUser: fromUser,
     read: false,
     createdAt: new Date(),
    },
    {
     messageId: receiverId,
     message: message,
     fromUser: fromUser,
     read: false,
     createdAt: new Date(),
    },
   ];

   Meteor.call('messagesSend', messageDataArray);
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

  clearErrors({LocalState}){
   LocalState.set('MESSAGE_ERROR', null);
  },


}
