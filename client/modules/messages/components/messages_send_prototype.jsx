import React from 'react';

class MessagesSend extends React.Component{

 handleMessageSend(e){
  e.preventDefault();

  // generating a message id for recepient's copy of message (current user's id + recepient_id )
  const senderId = Meteor.userId() + 'kHaEwhLjaeJnDH9Yq';

  // generating message id for recepient's copy of message (recepient_id + current user's id)
  const receiverId = 'kHaEwhLjaeJnDH9Yq' + Meteor.userId();

  const {messageSend, validateMessage} = this.props;

  // validating the message field
  validateMessage(this.refs.message.value);

  messageSend(senderId, receiverId, this.refs.message.value, Meteor.userId());

 }
 render(){


  return (
   <div>
     <form action="">
      <textarea ref="message" id="" cols="30" rows="10"></textarea>
      <button onClick={this.handleMessageSend.bind(this)}>Send</button>
     </form>
   </div>
  )
 }
}


export default MessagesSend;
