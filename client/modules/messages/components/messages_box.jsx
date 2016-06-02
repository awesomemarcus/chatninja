import React from 'react';
import MessagesListRow from './messages_list_row.jsx';
import {$} from 'meteor/jquery';

class MessagesBox extends React.Component{
  componentDidMount() {
    $('#main').animate({scrollTop: 1000000});
  }

  render(){
    const {messages} = this.props;

    return(
     <div id="main">
       <ul>
        {messages.map( message => (

         <MessagesListRow key={message._id} message={message}/>

        ))}
       </ul>
     </div>
    );

  }
}



export default MessagesBox;
