export default {
  sendMessage({Meteor}, messageId, message){
   Meteor.call('messages.send', messageId, message);
  },

  
}
