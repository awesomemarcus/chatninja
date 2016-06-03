import React from 'react';
import MessagesListRow from './messages_list_row.jsx';
import $ from 'jquery';

class MessagesBox extends React.Component{
  componentWillMount(){
   this.readMessage();
  }

  componentWillUpdate(){
   this.readMessage();
  }

  componentDidUpdate(){
   this.readMessage();
  }

  componentDidMount() {
    $('#main').animate({scrollTop: 1000000});
  }

  readMessage(){
   const {markRead, recipientId} = this.props;

   markRead(recipientId);
  }

  render(){
    const {messages, myId} = this.props;

    return(
     <div id="main">
       <ul>
        {messages.map( message => (
         <MessagesListRow key={message._id} message={message} myId={myId} />
        ))}
       </ul>
     </div>
    );

  }
}



export default MessagesBox;
