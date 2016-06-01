import React from 'react';
import {$} from 'meteor/jquery';


class MessagesSend extends React.Component{

 handleMessageSend(e){
  e.preventDefault();
  const {recipientId, messageSend, validateMessage, errorFields} = this.props;

  const toId = recipientId;

  const fromId = Meteor.userId();


  // validating the message field
  validateMessage(this.refs.message.value);

  if(!errorFields.message){
   messageSend(fromId, toId, this.refs.message.value, Meteor.userId());
  }

  $('#main').animate({scrollTop: 1000000});

 }

 testSend(e){
  e.preventDefault();
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
