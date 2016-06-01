import {MessageSchem} from '/lib/collections/messages';

export default {
  messageSend({Meteor}, fromId, toId, message){

   const messageDataArray =
    {
     message: message,
     fromUser: fromId,
     toUser: toId,
     read: false,
     deleted: [],
     createdAt: new Date(),
    }

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
