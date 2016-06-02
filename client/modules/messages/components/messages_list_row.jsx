import React from 'react';
import DeleteModal from '../containers/delete_modal.js';

class MessagesListRow extends React.Component{

 render(){

  const {message} = this.props;

  return(
   <li>
    {(Meteor.userId() == message.fromUser) ?
       <p className="bubble me">{message.message} <a href="#" style={{fontSize: '12px'}} data-toggle="modal" data-target={"#myModal" + message._id} ref={message._id}>delete</a></p>
       :
       <p className="bubble you">{message.message} <a href="#" style={{fontSize: '12px'}} data-toggle="modal" data-target={"#myModal" + message._id} ref={message._id}>delete</a></p>
    }

    <DeleteModal idToDelete={message._id}/>

   </li>
  );
 }
}

export default MessagesListRow;
