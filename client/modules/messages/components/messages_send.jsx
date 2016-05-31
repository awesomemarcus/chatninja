import React from 'react';

class MessagesSend extends React.Component{

 handleMessageSend(){
  const dummyId = Meteor.userId() + 'kHaEwhLjaeJnDH9Yq';
  
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
