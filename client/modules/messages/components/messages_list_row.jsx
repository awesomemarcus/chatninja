import React from 'react';
import DeleteModal from './delete_modal.jsx';

const MessagesListRow = ({message}) => (


  <li>
   {(Meteor.userId() == message.fromUser) ?
     <p className="bubble me">{message.message} <a href="#" style={{fontSize: '12px'}} data-toggle="modal" data-target="#myModal">delete</a></p> :
     <p className="bubble you">{message.message} <a href="#" style={{fontSize: '12px'}} data-toggle="modal" data-target="#myModal">delete</a></p>
   }
   <DeleteModal />
  </li>

);

export default MessagesListRow;
