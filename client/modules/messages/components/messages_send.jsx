import React from 'react';

class MessagesSend extends React.Component{

 handleMessageSend(e){
  e.preventDefault();

  // generating a message id for recepient's copy of message (current user's id + recepient_id )
  const toId = 'QNee4Es2Lqf2bPCNg';

  // generating message id for recepient's copy of message (recepient_id + current user's id)
  const fromId = Meteor.userId();

  const {messageSend, validateMessage} = this.props;

  // validating the message field
  validateMessage(this.refs.message.value);

  messageSend(fromId, toId, this.refs.message.value, Meteor.userId());

 }
 render(){


  return (
   <div className="sending-message">
      <textarea ref="message" type="text" className="message-input" placeholder="Type message..."></textarea>
        <button onClick={this.handleMessageSend.bind(this)}>
          <svg id="send-ico"	 viewBox="0 0 26.5 22.9">
            <polygon points="5.8,0 26.5,12.4 5.3,22.9 6.6,14.8 0,10.4 11.3,10.4 6.4,7.7 "/>
          </svg>
        </button>
   </div>
  )
 }
}


export default MessagesSend;
