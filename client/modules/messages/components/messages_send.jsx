import React from 'react';

class MessagesSend extends React.Component{

 handleMessageSend(e){
  e.preventDefault();

  // generating a message id for recepient's copy of message (current user's id + recepient_id )
  const senderId = Meteor.userId() + 'QNee4Es2Lqf2bPCNg';

  // generating message id for recepient's copy of message (recepient_id + current user's id)
  const receiverId = 'QNee4Es2Lqf2bPCNg' + Meteor.userId();

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
